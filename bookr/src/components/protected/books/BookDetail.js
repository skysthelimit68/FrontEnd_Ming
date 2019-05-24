import React from "react";
import compose from 'recompose/compose';

import { connect } from "react-redux";
import { fetchBook } from "../../../actions";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import StarRatingComponent from 'react-star-rating-component';
import BookReviews from './BookReviews';
import ReviewForm from './ReviewForm';
import BuyBookModal from './BuyBookModal';



const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });

class BookDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            
        }
    }

    componentWillMount() {
        this.props.fetchBook(this.state.id)   
    }

    fetchBookAfterReview = id => {
        this.props.fetchBook(id)
    }
    
    render() {
        if(!this.props.activeBook.authors || !this.props.activeBook.reviews) return (<div>Book is loading...</div>)
        
        return (
            <div className="bookpage_left_wrapper">
                <div className="bookpage_img_wrapper">
                    <img src={this.props.activeBook.cover_url} />
                    <div className="star_rating">
                        <StarRatingComponent 
                            name="stars" 
                            starCount={5}
                            //value={this.props.activeBook.stars.reduce((a,b) => a + b, 0) / this.props.activeBook.stars.length}
                            value={this.props.activeBook.average}
                        />
                        
                    </div>
                    <div className="right">
                        <ReviewForm id={this.state.id} fetchBookWithNewReview={this.fetchBookAfterReview}/>
                    </div>
                </div> 
                
                <div className="bookpage_desc_wrapper">
                    <Typography variant="h5" component="h3">
                        {this.props.activeBook.title}
                    </Typography>
                    <Typography  component="h5" >
                        by {' '} {this.props.activeBook.authors.map( author => <span key={author.name}> {author.name} {' '} </span>)}
                    </Typography>
                    <div className="divider"></div>
                    <div className="reviewCount"><span className="info-bold"># of Reviews:</span>{' '}{this.props.activeBook.reviews.length} {' '}</div>

                    <Typography component="p">
                        {this.props.activeBook.description}
                    </Typography>
                    <BuyBookModal isbn={this.props.activeBook.isbn} />
                   
                </div>
                
                <div className="bookpage_reviews_wrapper">
                    <BookReviews id={this.state.id}  />
                </div>
            </div>
                
            )
    }

}

const mapStateToProps = state => ({
    activeBook: state.activeBook
})

BookDetail.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default compose(
    withStyles(styles, { name: 'BookDetail' }),
    connect(mapStateToProps, {fetchBook})
  )(BookDetail)

/*
export default connect(
    mapStateToProps,
    { fetchBook }
)(withStyles(styles)(BookDetail))
*/