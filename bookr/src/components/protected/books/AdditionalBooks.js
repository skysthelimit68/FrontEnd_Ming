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
   

    render() {
        if(this.props.topBooks.length <= 0) return <div>Loading Top Rated Books...</div>
        
            return(
                <div class="additionalBooks_wrapper">
                    {this.props.topBooks.map(book => <div className="additionalBooks_img_wrapper"><img src={book.cover_url} /></div>)}
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


