import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from "redux";
import allReducers from "./reducers/user-reducer";


const store = createStore(allReducers);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
