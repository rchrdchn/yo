import React from 'react';
import books from './books.js';
import '../App.scss';

const Readings = () => {
    const renderHTML = book => (
        <div className="reads_book" key={book.title}>
            <div className="reads_cover">
                <img src={book.cover} alt={book.title}/>
            </div>
            <div className="reads_metadata">
                <h3><a href={book.link} target="_blank" rel="noopener noreferrer">{book.title}</a></h3>
                <p>{book.author}</p>
            </div>
        </div>
    )

    const renderBooks = (books, reading = false) => books.filter(book => book.reading === reading).map(book => renderHTML(book));

    return (
        <div className="reads">
            <h2>Reading list <span role="img" aria-label="emoji">📚</span></h2>
            <div className="reads_current">
                <h3>Current</h3>
                {renderBooks(books, true)}
            </div>
            <div className="reads_past">
                <h3>Past</h3>
                {renderBooks(books, false)}
            </div>
        </div>
    )
}

export default Readings;
