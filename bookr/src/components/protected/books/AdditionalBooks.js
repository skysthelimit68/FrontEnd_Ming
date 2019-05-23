import React from "react";
import { connect } from "react-redux";
import { getBooks } from "../../../actions";
import { Link } from "react-router-dom";

class AdditionalBooks extends React.Component {
    constructor() {
        super();
        this.state= {
            
        }
    }

    componentDidMount() {
        this.props.getBooks();
    }

    handleClick = event => {
        event.preventDefault();
        window.location.reload();
    }
   

    render() {
        if(this.props.topBooks.length <= 0) return <div>Loading Top Rated Books...</div>
        
            return(
                <div class="additionalBooks_wrapper" onClick={this.handleClick}>
                    {this.props.topBooks.map(book => 
                    <Link to={`/member-area/book/${book.id}`}>
                        <div className="additionalBooks_img_wrapper">
                            <img src={book.cover_url} />
                        </div>
                    </Link>)}
                </div>
            )
        }
        
    
}

const mapStateToProps = state => ({
    topBooks: state.topBooks
})

export default connect(
    mapStateToProps, 
    { getBooks }
)(AdditionalBooks)


