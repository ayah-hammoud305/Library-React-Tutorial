import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "./Rating.jsx";
import Price from "./Price.jsx";

const Book = ({ book }) => {
  return (
    <div className="book">
      <a href={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={book.url} className="book__img"></img>
        </figure>
      </a>
      <div className="book__title">
        <a href={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </a>
      </div>
      <Rating rating={book.rating} />
      <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
    </div>
  );
};

export default Book;
