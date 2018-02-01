import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Table } from "react-bootstrap";
import  App  from "../css/App.css";



class UserList extends React.Component {



	loadUsers() { 
		return this.props.users.map((user) => {
      return(
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.status}</td>
              </tr>
      );
	});
}


	render() {
		return ( 
      <div className="container table-spaces">
        <Table responsive>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.loadUsers()}
            </tbody>
        </Table>
			</div>
		);
	}
}


function mapStateToProps(state){
	return{
		users: state.users
	}
}

export default connect(mapStateToProps)(UserList);
