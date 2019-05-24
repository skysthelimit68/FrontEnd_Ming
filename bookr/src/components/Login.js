import React from 'react';
import MemberForm from './MemberForm'
import { login } from "../actions";
import { connect } from "react-redux"
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';


const styles = theme => ({
   
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
      dense: {
        marginTop: 16,
      },
      menu: {
        width: 200,
      },
      button: {
          margin: theme.spacing.unit,
        },
        input: {
          display: 'none',
        },
     
  });

class Login extends React.Component {

    componentDidMount() {
        if (localStorage.getItem("token")) {
            this.props.history.push('/member-area');
        }
    }

    handleLogin = creds => {
        this.props.login(creds)
            .then(() => this.props.history.push('/member-area'))
    }
    render() {
        const { classes } = this.props;

        return (
            <div className="fullpage_wrap fullpage_prompt">
                <div className="container signupLogin">
                    <div className="signup_wrapper">
                    <div className="form_wrapper form_left">
                        <h1>Sign in to Account</h1>
                        <MemberForm newUser={false} login={this.handleLogin} />
                    </div>
                    <div className="prompt_right">
                        <div className="prompt-wrap">
                            <h1>Hi, There!</h1>
                            <h2>Review books and read unlimited reviews</h2>
                        </div>
                    <div className="prompt-wrap">
                        <Link to="/signup">
                            <Button variant="outlined" className={`${classes.button} prompt_button`}>Sign Up</Button>
                        </Link>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

}
Login.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default compose(
    withStyles(styles, { name: 'Login' }),
    connect(null, { login })
  )(Login)

  /*
export default connect(
    null,
    { login }
)(Login);*/

