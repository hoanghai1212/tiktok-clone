import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import Videos from './dbModel.js'

//config
const app = express();
const port = process.env.PORT || 9000;
//middleware
app.use(express.json())
app.use(cors())

// DB config
const connection_url = "mongodb+srv://admin:KdkNeHGbUv75TRvi@cluster0.q1xve.mongodb.net/tiktokdb?retryWrites=true&w=majority"
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

//api endpoints
app.get('/', (req, res) =>
{
    return res.status(200).send("Hello World")
})

app.get('/v1/getvideos', (req, res) =>
{
    Videos.find((err, data) =>
    {
        if (err)
        {
            res.status(500).send(err)
        }
        else
        {
            res.status(201).send(data)
        }
    })
})

app.post('/v1/upload', (req, res) =>
{
    const dbVideos = req.body
    Videos.create(dbVideos, (err, data) =>
    {
        if (err)
        {
            res.status(500).send(err)
        }
        else
        {
            res.status(201).send(data)
        }
    })
})
//listen
app.listen(port, () =>
{
    console.log("Server running on port", port);
})