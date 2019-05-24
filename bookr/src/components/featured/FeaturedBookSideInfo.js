import React from "react";
import { connect } from "react-redux";
import { fetchBook } from "../../actions";
import BookSubjects from "../protected/books/BookSubjects";
import BookInfo from "../protected/books/BookInfo";
import MoreFeaturedBooks from "./MoreFeaturedBooks";

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
                <BookInfo book={this.props.activeBook} />
                <BookSubjects subjects={this.props.activeBook.subjects} />
               
                <h2>Featured Books</h2>
                <MoreFeaturedBooks />

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