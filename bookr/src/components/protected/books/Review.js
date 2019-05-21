import React from "react";
import StarRatingComponent from 'react-star-rating-component';


const Review = props => {
    return(
        <div key={props.review.id}>
            <p>{props.review.username} {" "}</p>
            <StarRatingComponent 
                name="stars" 
                starCount={5}
                value={props.review.rating}
            />
        {props.review.comment ? props.review.comment : null }</div>
    )
}

export default Review;