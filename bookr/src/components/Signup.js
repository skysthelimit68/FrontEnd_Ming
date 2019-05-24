import React from 'react';
import MemberForm from "./MemberForm";
import { signUp } from "../actions";
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import "./form.css";

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

class Signup extends React.Component {

    constructor(props) {
        super(props);

    }

    handleSignup = newUser => {
        this.props.signUp(newUser)
            .then(() => this.props.history.push('/member-area'))
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="fullpage_wrap fullpage_prompt">
                <div className="container signupLogin">
                    <div className="signup_wrapper">
                        <div className="prompt_left">
                            <div className="prompt-wrap">
                                <h1>Hi, There!</h1>
                                <h2>If you already have an account</h2>
                            </div>
                            <div className="prompt-wrap">
                                <Link to="/login">
                                    <Button variant="outlined" className={`${classes.button} prompt_button`}>Sign in</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="form_wrapper form_right">
                            <h1>Create an Account</h1>
                            <MemberForm newUser={true} signup={this.handleSignup} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}


Signup.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default compose(
    withStyles(styles, { name: 'Signup' }),
    connect(null, { signUp })
)(Signup)

/*
export default connect(
    null,
    { signUp }
)(Signup);
*/