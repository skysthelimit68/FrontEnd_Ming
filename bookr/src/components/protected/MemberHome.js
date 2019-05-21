import React from 'react';
import { connect } from "react-redux";
import BookList from "./books/BookList";
import { getBooks } from "../../actions";
import { Route } from "react-router-dom";
import Book from "./books/Book";

class MemberHome extends React.Component {
    constructor(){
        super();
        this.state={

        }
    }

    componentDidMount() {
        this.props.getBooks();
    }

    render(){
        return(
            <div className="container memberHome">
                <h1>You've reached a secured area</h1>
                
                <Route 
                    exact
                    path="/member-area"
                    render={(props) => <BookList {...props} books={this.props.books} />}
                />
                <Route 
                    path="/member-area/book/:id"
                    render={(props) => <Book {...props} />}
                />
            </div>
        )
    }
    
}

const mapStateToProps = state => ({
    books : state.books
})


export default connect(
    mapStateToProps,
    { getBooks }
)(MemberHome) ;