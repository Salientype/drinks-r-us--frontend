import React, { Component } from 'react'
import AuthService from '../components/AuthService';
import withAuth from '../components/withAuth';
import '../App.css';
const Auth = new AuthService();

class Admin extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        IF YOU SEE THIS YOU ARE LOGGED IN :)
                        <br/>
                       Add Fetch User component Here
                    </div>
                </div>
            </div>
        )
    }
}
export default withAuth(Admin);