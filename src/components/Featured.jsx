import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Book from './ui/Book.jsx'
import { books } from '../data.js'


const Featured = () => {
console.log()
    return (
        <section id='features'>
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Featured <span className='purple'>Books</span>
                    </h2>
                    <div className="books">
                        {books.filter((book) => book.rating === 5).slice(0, 4).map((book) => (
                            <Book book={book} key={book.id}/>
                        ))}
                        {/* .map turns everything into HTML & and slice splits it, so it only shows 4 books. */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured;