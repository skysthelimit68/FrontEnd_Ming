import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { withRouter, BrowserRouter as Router } from "react-router-dom";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
);

const AppWithRouter = withRouter(App);

ReactDOM.render(
<Provider store = {store}>
    <Router>
        <AppWithRouter />
    </Router>
</Provider>,
document.getElementById('root'));


serviceWorker.unregister();
