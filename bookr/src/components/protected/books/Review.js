import React from "react";
import StarRatingComponent from 'react-star-rating-component';
import MemberAvatar from '../member/MemberAvatar';

const Review = props => {
    return(
        <div className="review_wrapper" key={props.review.id}>
            <div className="review_left">
                <MemberAvatar username={props.review.username} type="review" user={props.review.username}/>
            </div>
            <div className="review_right">
            
                <div className="review_topRow">
                <p>{props.review.username}</p> 
            <StarRatingComponent 
                name="stars" 
                starCount={5}
                value={props.review.rating}
            />
            </div>
            <p>{props.review.comment ? props.review.comment : null } </p>
                
            </div>
        </div>
    )
}

export default Review;