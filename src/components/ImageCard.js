import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const ImageCard = props => {
  return (
    <div className="image-list">
      {/* <img className="nasa-image" alt="random-nasa" src={props.imgpath} />
      <hr />
      <h3>Image Description</h3>
      <p>{props.explanation}</p>
      <hr />
      <h5>Image Copyright: {props.copyright}</h5>
      <hr />
      <h5>Date: {props.release_date}</h5> */}

      <Card
        body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }}
      >
        <CardImg top width="100%" src={props.imgpath} alt="Card image cap" />
        <CardBody>
          <CardTitle>Image Description</CardTitle>
          <CardText>{props.explanation}</CardText>
          <CardSubtitle>Image Copyright: {props.copyright}</CardSubtitle>
          <CardSubtitle>Date: {props.release_date}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};
export default ImageCard;
