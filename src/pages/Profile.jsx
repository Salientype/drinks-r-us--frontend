import React, { Component } from 'react';
import AuthService from '../components/AuthService';
import withAuth from '../components/withAuth';
import { getProfileData } from '../api/userApi';
import '../App.css';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            f_name: '',
            l_name: '',
            email: '',
            phone: '',
            errors: {},
        };
    }
    
    componentDidMount() {
        const Auth = new AuthService()
        console.log(Auth.isAdmin())
        getProfileData()
            .then(profileData => {
                this.setState({
                    loaded: true,
                    ...profileData,
                });
            });
    }

    render() {
        if (!this.state.loaded) {
            return <div>Loading</div>;
        }
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-4 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-4">
                        <tbody>
                            <tr>
                                <td style={{ "text-align": "left" }}><div class="form-group">
                                    <label for="inputEmail">First Name</label>
                                    <input type="email" class="form-control" id="inputEmail" placeholder="Email" value={this.state.f_name} />
                                </div>
                                </td>
                        
                            </tr>
                            <tr>
                            <td style={{ "text-align": "left" }}><div class="form-group">
                                    <label for="inputEmail">Last Name</label>
                                    <input type="email" class="form-control" id="inputEmail" placeholder="Email" value={this.state.l_name} />
                                </div>
                                </td>
                            </tr>
                            <tr>
                            <td style={{ "text-align": "left" }}><div class="form-group">
                                    <label for="inputEmail">Email</label>
                                    <input type="email" class="form-control" id="inputEmail" placeholder="Email" value={this.state.email} />
                                </div>
                                </td>
                            </tr>
                            <tr>
                            <td style={{ "text-align": "left" }}><div class="form-group">
                                    <label for="inputEmail">Phone</label>
                                    <input type="email" class="form-control" id="inputEmail" placeholder="Email" value={this.state.phone} />
                                </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default withAuth(Profile);