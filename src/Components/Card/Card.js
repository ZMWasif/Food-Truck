import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Card.css";

const Card = (props) => {
  const { name, description, ratings } = props.product;
  return (
    <div className="card card-design">
      <div className="card-body">
        <h5 className="card-title font-bold">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">{ratings}</small>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        </p>
      </div>
    </div>
  );
};

export default Card;
