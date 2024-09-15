import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "./Rating.jsx";
import Price from "./Price.jsx";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Book = ({ book }) => {
  const [img, setImg] = useState();
  // at first there is nothing in the image ^
  // as soon as it mounts, its gonna call the useEffect

  const mountedRef = useRef(true);
  // when useRef changes, the component doesnt re-render unlike useState when img is called.
  // as soon as it mounts, its going to call it.


  useEffect(() => {
    // first, itll create a DOM image element with JS
    const image = new Image();
    image.src = book.url;
    // attaches an onload function, when it loads, do this image
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
        setImg(image)
      }
      }, 300)
    };
    return () => {
      // When the component unmounts
      mountedRef.current = false
      // make sure to use .current for useRef
    }
  })


  return (
    <div className="book">
      {
        img ? (
          // remember to add empty fragments <> </>
          <>
          <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={book.url} className="book__img"></img>
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating} />
      <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
      </>
        ) : (
          <>
          <div className="book__img--skeleton"></div>
      <div className="skeleton book__title--skeleton"></div>
      <div className="skeleton book__rating--skeleton"></div>
      <div className="skeleton book__price--skeleton"></div>
          </>
        )
      }
    </div>
  );
};

export default Book;
