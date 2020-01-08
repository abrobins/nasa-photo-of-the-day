import React from "react";

const ImageCard = props => {
  return (
    <div className="image-list">
      <img className="nasa-image" alt="random-nasa" src={props.imgpath} />
      <hr />
      <h3>Image Description</h3>
      <p>{props.explanation}</p>
      <hr />
      <h5>Image Copyright: {props.copyright}</h5>
      <hr />
      <h5>Date: {props.release_date}</h5>
    </div>
  );
};
export default ImageCard;
