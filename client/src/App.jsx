import React from "react";
import "./App.scss";
import Video from "./component/Video/Video";
import { useEffect } from "react";
import axios from "./services/axios";
import { useState } from "react";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchVideos() {
      const res = await axios.get("/v1/getvideos");
      setVideos(res.data);

      return res;
    }
    fetchVideos();
  }, []);

  console.log(videos);
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((video) => (
          <Video key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default App;
