import React, { Component } from 'react';
import App from '../css/App.css';
import Home from '../components/Home.js';

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <Home/>
      </div>
    );
  }
}

export default Main;
