import React, { Component } from 'react'
import '../App.css';
import { registerUser } from '../api/userApi';

class Register extends Component {
  constructor() {
    super()
    this.state = {
      f_name: '',
      l_name: '',
      email: '',
      phone: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      f_name: this.state.f_name,
      l_name: this.state.l_name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
    };

    try {
      registerUser(newUser);
      window.alert('Registered Successfully!');
      this.props.history.push('/Login');
    }
    catch (e) {
      window.alert('Something went wrong.');
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="f_name"
                  placeholder="Enter your first name"
                  value={this.state.f_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="l_name"
                  placeholder="Enter your lastname name"
                  value={this.state.l_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="phone"
                  className="form-control"
                  name="phone"
                  placeholder="Enter phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
               </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;