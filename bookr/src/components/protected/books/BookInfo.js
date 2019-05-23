import React from "react";

const BookInfo = props => {
    return (
        <div>
            <p>Publisher: {props.book.publisher}</p>
            <p>Year Published: {props.book.year}</p>
            <p>Book Edition: {props.book.edition}</p>
            
        </div>
    )
}

export default BookInfo;