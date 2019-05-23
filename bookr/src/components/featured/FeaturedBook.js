import React from "react";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FeaturedBookDetail from './FeaturedBookDetail';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });

class FeaturedBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : props.match.params.id
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div className="container ">
                <Paper className={`${classes.root} bookpage_full`}elevation={1}>
                     <FeaturedBookDetail id={this.state.id} />
                </Paper>
            </div>
           
        )
    }
}

export default withStyles(styles)(FeaturedBook);



/*import React from "react";

class FeaturedBook extends React.Component {
    constructor() {
        super();
        this.state={

        }
    }
    render(){
        return(
            <div className="container">Testing out Featured Book</div>
        )
    }
}

export default FeaturedBook;
*/
