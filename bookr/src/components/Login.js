import React from 'react';
import MemberForm from './MemberForm'
import { login } from "../actions";
import { connect } from "react-redux"

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
        return (
            <div className="fullpage_wrap fullpage_prompt">
                <div className="container signupLogin">
                    <div className="signup_wrapper">
                    <div className="form_wrapper form_left">
                        <h2>Sign in to account</h2>
                        <MemberForm newUser={false} login={this.handleLogin} />
                    </div>
                    <div className="prompt_right">
                    </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default connect(
    null,
    { login }
)(Login);

