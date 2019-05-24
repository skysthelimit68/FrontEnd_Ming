import React from "react";
import { connect } from "react-redux";
import { fetchBook } from "../../../actions";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';


const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: theme.spacing.unit,
    },
  });

const BookSubjects = props => {
    const { classes } = props;

    return (

        <div className={classes.root}>

            {props.subjects.map(subject => 
            <Chip
                label={subject.name}
                className={`${classes.chip} subject-chip`}
                component="a"
                href="#"
                color="primary"
                clickable
            />
        )}    
         
        </div>

  
    )
}

BookSubjects.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(BookSubjects);











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
