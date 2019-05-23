import React from "react";
import compose from 'recompose/compose';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FeaturedBookDetail from './FeaturedBookDetail';
import FeaturedBookSideInfo from './FeaturedBookSideInfo';
import FeaturedForm from './FeaturedForm';
import { login , signUp } from '../../actions';
import { connect } from "react-redux";


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

    handleSignup = newUser => {
        this.props.signUp(newUser)
        .then(() => this.props.history.push('/member-area'))
    }

    handleLogin = creds => {
        this.props.login(creds)
            .then(() => this.props.history.push('/member-area'))
    }

    render() {
        const { classes } = this.props;

        return (
            <div className="container">
                <Paper className={`${classes.root} bookpage_full`}elevation={1}>
                     <FeaturedBookDetail id={this.state.id} />
                     <div className="bookpage_right_wrapper">
                        <FeaturedBookSideInfo id={this.state.id} />
                        <FeaturedForm login={this.handleLogin} signup={this.handleSignup}/>
                     </div>

                </Paper>
           </div>
        )
    }
}




export default compose(
    withStyles(styles, { name: 'FeaturedBook' }),
    connect(null, {login, signUp})
  )(FeaturedBook)

//export default withStyles(styles)(FeaturedBook);



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
