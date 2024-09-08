import React from 'react';
import { books } from "../data.js";
import Book from "./ui/Book.jsx";

const Discounted = ({ books, book }) => {
    return (
        <section id='recent'>
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Discounted <span className='purple'>Books</span>
                    </h2>
                    <div className="books">
                        {/* Use && operator to check if "books" has any value, if so, run it. */}
                        {books && books
                        .filter(book => book.salePrice)
                        .map((book) => (
                            <Book book={book} key={book.id} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Discounted;