import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Rating = ({ rating }) => {
  return (
    <div className="book__ratings">
      {
        new Array(Math.floor(rating)).fill(0).map((_, index) => (
          <FontAwesomeIcon icon="star" key={index} />
        ))
        //    Fill an array with 5 '0's and .map to turn it indo icon html
      }
      {!Number.isInteger(rating) && (
        <FontAwesomeIcon icon="star-half-alt" />
      )}
    </div>
  );
};

export default Rating;
