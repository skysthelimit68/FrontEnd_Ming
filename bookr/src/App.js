import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MemberHome from "./components/protected/MemberHome";
import FeaturedBook from "./components/featured/FeaturedBook";

import Header from './components/Header';

import './App.css';

class App extends React.Component {

   logout = event => {
    event.preventDefault();
    localStorage.removeItem("token")
    this.props.history.push('/login')
  }
  render() {
    return (
     <div className="app">
       <Header logout={this.logout}/>
       <Route exact path="/" component={Login} />
       <Route path="/login" component={Login}/>
       <Route path="/signup" component={Signup}/>
       <PrivateRoute path="/member-area" component={MemberHome} />
       <Route path="/featured-books/:id" component={FeaturedBook} />
     </div>
  );
  }
  
}

export default App;


/*
<header>
         <div className="header-wrapper">
         <Link to="/member-area">
          <div className="logo-wrapper">
            <img src={logo} alt="logo" />
          </div>
         </Link> 
         
         {localStorage.getItem("token") ? 
         <button onClick={this.logout}>Logout</button> : null}

        {localStorage.getItem("token") ? 
          <MemberAvatar /> : null}
      
        </div>
       </header>
       */