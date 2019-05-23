import React from "react";
import { connect } from "react-redux";
import { fetchBook } from "../../../actions";
import BookSubjects from "./BookSubjects";
import BookInfo from "./BookInfo";
import AdditionalBooks from "./AdditionalBooks";

class BookSideInfo extends React.Component {
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
     //if(!this.props.activeBook.subjects) return <div>Loading Additional Book Info...</div>
        return (
            <div className="bookpage_right_wrapper">
                {this.props.activeBook.subjects ? <BookSubjects subjects={this.props.activeBook.subjects} /> : null}
                <BookInfo book={this.props.activeBook} />
                <h2>Top Rated Books: </h2>
                <AdditionalBooks />
            </div>
           /* <div className="bookpage_right_wrapper">
                {this.props.activeBook.subjects.map( subject => <span>{subject.name}{' '}</span> )}
            </div>*/
        )

    }
}

//export default BookSideInfo;


const mapStateToProps = state => ({
    activeBook: state.activeBook
})



export default connect(
    mapStateToProps, 
    { fetchBook }
)(BookSideInfo)



