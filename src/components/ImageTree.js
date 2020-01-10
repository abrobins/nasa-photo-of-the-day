import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";

export default function ImageTree() {
  const [nasaimg, setNasaImg] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=02QLU6AgrqZb2z4OSavLTGyp8lcy5iMiQ3fHHsUO"
      )
      .then(response => {
        setNasaImg(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);
  return (
    <div className="nasa-img">
      <ImageCard
        imgpath={nasaimg.url}
        explanation={nasaimg.explanation}
        release_date={nasaimg.date}
        copyright={nasaimg.copyright}
      />
    </div>
  );
}
