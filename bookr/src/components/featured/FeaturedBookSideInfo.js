import React from "react";
import { connect } from "react-redux";
import { fetchBook } from "../../actions";
import BookSubjects from "../protected/books/BookSubjects";
import BookInfo from "../protected/books/BookInfo";

class FeaturedBookSideInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            id : props.id
        }
    }

    componentWillMount() {
        this.props.fetchBook(this.state.id)   
    }

    render() {
     if(!this.props.activeBook.subjects) return <div>Loading Additional Book Info...</div>
        return ( 
            
            
            
            <div>
                <BookSubjects subjects={this.props.activeBook.subjects} />
                <BookInfo book={this.props.activeBook} />
                <h2>Featured Books</h2>
            </div>
           
        )

    }
}



const mapStateToProps = state => ({
    activeBook: state.activeBook
})



export default connect(
    mapStateToProps, 
    { fetchBook }
)(FeaturedBookSideInfo)