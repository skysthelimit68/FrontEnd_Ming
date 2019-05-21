import axios from 'axios';
import { axiosWithAuth } from "../axiosWithauth"
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL= "SIGNUP_FAIL";

export const signUp = newUser => dispatch => {
    dispatch({type : SIGNUP_START});
    return (
        axios
        .post("http://localhost:5000/api/signup", newUser)
        .then( res => {
            dispatch({type:SIGNUP_SUCCESS, payload: res.data.users, token: res.data.token})
            localStorage.setItem("token", res.data.token)
            console.log(res)
        })
        .catch( err => {
            dispatch({type:SIGNUP_FAIL, payload: err.response.data.msg})
            console.log(err)
        })
    )
}

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const login = creds => dispatch => {
    dispatch({ type : LOGIN_START })
    return (
        axios
        .post("http://localhost:5000/api/login", creds)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
            console.log(res.data.payload)
            localStorage.setItem("token", res.data.payload)
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAIL, payload: err})
            console.log(err)
        })
    )
}

export const GETBOOKS_START = "GETBOOKS_START";
export const GETBOOKS_SUCCESS = "GETBOOKS_SUCCESS";
export const GETBOOKS_FAIL = "GETBOOKS_FAIL";

export const getBooks = () => dispatch => {
    dispatch({ type : GETBOOKS_START })
    return (
        //axiosWithAuth().get("https://lambda-bookr.heroku.com/api/books")
        axios
        .get("http://localhost:3500/api/books")
        .then( res => {
            dispatch({ type : GETBOOKS_SUCCESS, payload : res.data})
            console.log(res)
        })
        .catch( err => {
            //dispatch({ type : GETBOOKS_FAIL, payload : err})
            console.log(err)
        })
    )
}

export const FETCHBOOK_START = "FETCHBOOK_START";
export const FETCHBOOK_SUCCESS = "FETCHBOOK_SUCCESS";
export const FETCHBOOK_FAIL = "FETCHBOOK_FAIL";

export const fetchBook = id => dispatch => {
    dispatch({ type : FETCHBOOK_START })
    console.log(id)
    return (
       // axiosWithAuth().get(`http://localhost:5000/api/books/`)
        axios
        .get(`http://localhost:3500/api/books/${id}`)
        .then( res => {
            dispatch({ type : FETCHBOOK_SUCCESS, payload: res.data})
            console.log(res.data)
        })
        .catch( err => {
            dispatch({ type : FETCHBOOK_FAIL , payload : err})
            console.log(err)
        })
    )
}

export const POSTREVIEW_START = "POSTREVIEW_START";
export const POSTREVIEW_SUCCESS = "POSTREVIEW_SUCCESS";
export const POSTREVIEW_FAIL = "POSTREVIEW_FAIL";

export const postReview = review => dispatch => {
    dispatch ({ type : POSTREVIEW_START })
    console.log("from postReview action", review)
    return (
        // axiosWithAuth().get(`http://localhost:5000/api/books/`)
         axios
         .post(`http://localhost:3500/api/reviews/`, review)
         .then( res => {
             console.log("post review res: ", res)
             dispatch({ type : POSTREVIEW_SUCCESS, payload: res.data})
         })
         .catch( err => {
            dispatch({ type : POSTREVIEW_FAIL , payload : err})
             console.log(err)
         })
     )
}