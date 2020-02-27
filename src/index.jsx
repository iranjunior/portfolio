import React from 'react';
import Axe from 'react-axe';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (process.env.NODE_ENV !== 'production') {
  Axe(React, ReactDOM, 1000);
  ReactDOM.render(<App />, document.getElementById('root'));
} else {
  ReactDOM.render(<App />, document.getElementById('root'));
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
