import React from "react";

const BookInfo = props => {
    return (
        <div className="bookInfo-wrapper">
            <p><span className="info-bold">Publisher:</span> {props.book.publisher}</p>
            <p><span className="info-bold">Year Published:</span> {props.book.year}</p>
            <p><span className="info-bold">Book Edition:</span> {props.book.edition}</p>
            
        </div>
    )
}

export default BookInfo;