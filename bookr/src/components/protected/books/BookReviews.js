import React from "react";
import Review from "./Review";
import { connect } from "react-redux";


class BookReviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : props.id
        }
    }

    render() {
        if(!this.props.reviews) return <div>Loading Reviews ... </div>
        return(
        <div>
            {this.props.reviews.map(review => (
                <Review review={review} />
                )
            )}
        </div>
    )
    }
    
}

const mapStateToProps = state => ({
    reviews : state.activeBook.reviews
})

export default connect(
    mapStateToProps,
    { }
)(BookReviews);

//export default BookReviews;