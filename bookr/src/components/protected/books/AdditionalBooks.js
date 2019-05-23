import React from "react";
import { connect } from "react-redux";
import { getBooks } from "../../../actions";

class AdditionalBooks extends React.Component {
    constructor() {
        super();
        this.state= {
        }
    }
    
    componentDidMount() {
        this.props.getBooks();
    }
   
    getTopBooks(array, num) {
        const sortedBooks = array.sort( (a,b) => {
            return parseFloat(b.average) - parseFloat(a.average); 
        })   
        console.log("sorted books: ", sortedBooks)
        let topBooks = [];
        for(let i = 0; i < num; i++) {
            topBooks.push(sortedBooks[i]);
        }

        console.log("top books: " , topBooks)
        return topBooks;   
    }

    render() {
        if(this.props.books[0] == undefined) {
            return <div>Loading Top Rated Books...</div>
        } else {
            const topBooks = this.getTopBooks(this.props.books, 4)
            return(
                <div class="additionalBooks_wrapper">
                    {topBooks.map(book => <div className="additionalBooks_img_wrapper"><img src={book.cover_url} /></div>)}
                </div>
            )
        }
        
    }
}

const mapStateToProps = state => ({
    books: state.books
})

export default connect(
    mapStateToProps, 
    { getBooks }
)(AdditionalBooks)


//export default AdditionalBooks;