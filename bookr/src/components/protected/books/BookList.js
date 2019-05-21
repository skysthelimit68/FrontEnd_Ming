import React from "react";
import BookCard from "./BookCard"
import "./books.css";

const BookList = props => {
    return(
        <div className="booklist">
            {props.books.map( book => <BookCard book={book} />)}
        </div>
    )
}

export default BookList;