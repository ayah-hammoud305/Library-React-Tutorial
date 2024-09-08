import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Book = ({ book }) => {
    return (
        <div className="book">
                            <a href=''>
                                <figure className="book__img--wrapper">
                                    <img src={book.url} className='book__img'></img>
                                </figure>
                            </a>
                            <div className="book__title">
                                <a href='/' className='book__title--link'>
                                    {book.title}
                                </a>
                            </div>
                            <div className="book__ratings">
                                {
                                   new Array(5).fill(0).map((_, index) => <FontAwesomeIcon icon='star' key={index}/>) 
                                //    Fill an array with 5 '0's and .map to turn it indo icon html
                                }
                            </div>
                            <div className="book__price">
                                {
                                    book.salePrice ? (

                                     <><span className="book__price--normal">
                                    ${book.originalPrice.toFixed(2)} 
                                    {/* to fixed is the decimal place ex: 39$ => $39.00 */}
                                </span>
                                ${book.salePrice.toFixed(2)}</> 
                                ) : (
                                   <>${ book.originalPrice.toFixed(2) }</>
                                )}
                                
                            </div>
                        </div>
    )
}

export default Book;