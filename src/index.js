import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Routing from './config/routes'
import * as serviceWorker from './serviceWorker';
import './css/bootstrap.css';
import './css/style.css';
import './css/icons.css';

ReactDOM.render(<Routing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
