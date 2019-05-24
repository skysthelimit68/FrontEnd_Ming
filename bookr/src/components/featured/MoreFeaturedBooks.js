import React from "react";
import { connect } from "react-redux";
import { getBooks } from "../../actions";
import { Link } from "react-router-dom";

class MoreFeaturedBooks extends React.Component {
    constructor() {
        super();
        this.state= {
            featured : [1, 2, 4, 6]
        }
    }

    componentDidMount() {
        this.props.getBooks()
    }

    getFeaturedBooks = () => {
        return this.props.books.filter( book => this.state.featured.includes(book.id))
    }

    handleClick = event => {
        event.preventDefault();
        window.location.reload();
    }

    render() {
        const featuredBooks = this.getFeaturedBooks();
        return(

            <div class="additionalBooks_wrapper" onClick={this.handleClick}>
                    {featuredBooks.map(book => 
                    <Link to={`/featured-books/${book.id}`}>
                        <div className="additionalBooks_img_wrapper">
                            <img src={book.cover_url} />
                        </div>
                    </Link>)}
                </div>
        )
    }
        
    
}

const mapStateToProps = state => ({
    books: state.books
})

export default connect(
    mapStateToProps, 
    { getBooks }
)(MoreFeaturedBooks)


