import React from "react";

import BookDetail from "./BookDetail"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ReviewForm from './ReviewForm';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : props.match.params.id
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Paper className={`${classes.root} bookpage_full`}elevation={1}>
                     <BookDetail id={this.state.id} />
                </Paper>
            </div>
           
        )
    }
}



export default withStyles(styles)(Book);