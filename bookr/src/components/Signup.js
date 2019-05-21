import React from 'react';
import MemberForm from "./MemberForm";
import { signUp } from "../actions";
import { connect } from "react-redux"
import "./form.css";

const Signup = props => {
    
    const handleSignup = newUser => {
        props.signUp(newUser)
        .then(() => props.history.push('/member-area'))
    }
    
    
    return (
        <div className="fullpage_wrap fullpage_prompt">
            <div className="container signupLogin">
                <div className="signup_wrapper">
                    <div className="prompt_left">
                    </div>
                    <div className="form_wrapper form_right">
                        <h2>Create an account</h2>
                        <MemberForm newUser={true} signup={handleSignup}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(
    null,
    { signUp }
)(Signup);