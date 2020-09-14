import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-backend-mern-clone.herokuapp.com",
});

export default instance;
