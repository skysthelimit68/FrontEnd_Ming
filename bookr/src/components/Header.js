import React from "react";
import logo from '../logo.png';
import { Link } from "react-router-dom";
import MemberAvatar from "./protected/member/MemberAvatar";


const Header = props => {
    const homepageRoute = localStorage.getItem("token") ? "/member-area" : "/";
    return(
        <header>
          <div className="header-wrapper">
          <Link to={homepageRoute}>
           <div className="logo-wrapper">
             <img src={logo} alt="logo" />
           </div>
          </Link> 
 
         {localStorage.getItem("token") ? 
           <MemberAvatar logout={props.logout} /> : null}
       
         </div>
        </header>
    )
}

export default Header;