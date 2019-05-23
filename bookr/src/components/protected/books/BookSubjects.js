import React from "react";
import { connect } from "react-redux";
import { fetchBook } from "../../../actions";

const BookSubjects = props => {
    return (
        <div>
            {props.subjects.map(subject => <span key={subject.id}>{subject.name}{' '}</span>)}
        </div>
    )
}

export default BookSubjects;

/*
class BookSubjects extends React.Component {
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
        if(!this.props.activeBook.subjects) return <div>Loading Book Subjects...</div>
        return (
            <div className="bookpage_right_wrapper">
                {this.props.activeBook.subjects.map( subject => <span>{subject.name}{' '}</span> )}
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
)(BookSubjects)

*/
