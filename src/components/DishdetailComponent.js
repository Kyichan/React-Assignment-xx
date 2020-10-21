import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
// var moment = require("moment");

  function renderComments(comments) {
    if (comments != null)
      return (
        <>
          <h5>Comments</h5>
          <ul>
            {comments.map(comment => {
              return (
                <li>
                  {comment.comment} <br /> -- {comment.author}
                </li>
              );
            })}
          </ul>
        </>
      );
    else return <div></div>;
  }


const Dishdetail = ({ dish }) => {
  if (!dish) {
    return null;
  }
  const { name, image, description, comments } = dish;
  return (
    <div className="container mt-5">
    <div className="row justify-content-center align-items-center">
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top src={image} alt={name} />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>{description}</CardText>
          </CardBody>
        </Card>
      </div>
      <div className="col-12 col-md-5 m-1">{renderComments(comments)}</div>
    </div>
    </div>
  );
};

export default Dishdetail;