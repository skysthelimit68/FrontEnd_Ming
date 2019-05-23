import React from "react";
import { connect } from "react-redux";
import { fetchBook } from "../../actions";
//import BookSubjects from "./BookSubjects";
//import BookInfo from "./BookInfo";
//import AdditionalBooks from "./AdditionalBooks";

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
            
            <div>Testing side panel</div>
            
            /*
            <div>
                <BookSubjects subjects={this.props.activeBook.subjects} />
                <BookInfo book={this.props.activeBook} />
                <h2>Top Rated Books: </h2>
                <AdditionalBooks />
            </div>
           */
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