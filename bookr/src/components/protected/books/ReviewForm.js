import React from "react";
import StarRatingComponent from 'react-star-rating-component';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { postReview} from "../../../actions";



class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            comment:"",
            rating:1,
            open:false,
            fullWidth: true,
        }
    }

    handleClickOpen = () => {
        this.setState({
          open: true,
        });
      };

    handleSubmit = event => {
        event.preventDefault();
        const newReview = {
            rating: this.state.rating,
            comment: this.state.comment,
            book_id: this.props.activeBook.id,
            user_id: this.props.member.id
        }
        this.props.postReview(newReview)
        window.location.reload();
        //this.props.fetchBookWithNewReview(this.props.activeBook.id)

        this.handleClose();
        this.setState({
            comment : "",
            rating: 1
        })
    }
    
      handleClose = () => {
        this.setState({ open: false });
      };

    onStarClick = (nextValue, prevValue, name) => {
        this.setState({rating: nextValue});
      }

    updateField = event => {
        event.preventDefault()
        this.setState({
            [event.target.name] : event.target.value
        })
        
    }

    render() {
        const { rating } = this.state;
        return(
            <div>
                 <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Review Book
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    fullWidth={this.state.fullWidth}
                >
                <DialogTitle id="form-dialog-title">Add Review</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    
                    <p>{this.props.member.username}</p>
                        <p>{this.props.activeBook.title}</p>
                        <StarRatingComponent 
                            name="rate1" 
                            starCount={5}
                            value={rating}
                            onStarClick={this.onStarClick}
                        />
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="comment"
                        label="Review"
                        type="text"
                        onChange={this.updateField}
                        name="comment"
                        placeholder="Add Review..."
                        value={this.state.comment}
                        rowMax="8"
                        fullWidth
                        multiline
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                    Cancel
                    </Button>
                    <Button onClick={this.handleSubmit} color="primary">
                    Add My Review
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    member : state.member,
    activeBook : state.activeBook,
})

export default connect(
    mapStateToProps,
    { postReview })(ReviewForm);