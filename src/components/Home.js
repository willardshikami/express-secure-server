import React, { Component } from 'react';
import Homestyle from '../css/Homestyle.css';
import UserList from '../containers/user-list';



class Home extends React.Component {
  render() {
    return (
      <div>
        <UserList/>
      </div>
    );
  }
}

export default Home;
