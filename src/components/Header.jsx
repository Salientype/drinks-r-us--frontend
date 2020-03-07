import '../App.css';
import React, { Component } from 'react'
import Cart from '../pages/Cart';
import Beer from '../pages/Beer';
import Liquors from '../pages/Liquors';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import Admin from '../pages/Admin';
import Wine from '../pages/Wine';
import { NavLink, Switch, Route } from 'react-router-dom';
import AuthService from './AuthService';
import { withRouter } from "react-router";

class Header extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
        this.logout = this.logout.bind(this);
    }
    logout() {
        this.Auth.logout();
        alert('logged out!');
        this.props.history.replace('/Login');
    }
    render() {

        /*Need to relook at this part for quantity*/
        let unitTotal = 0;

        const totalCartQty = this.props.check.cart.forEach((cart, index) => {
            unitTotal += cart.units;
            return unitTotal;
        });

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <NavLink to="/" className="navbar-brand">DRINKS-R-US</NavLink>
                    <NavLink to="/" className="nav-link text-light"> Home </NavLink>
                    <NavLink to="/Liquors" className="nav-link text-light"> Liquors </NavLink>
                    <NavLink to="/Beer" className="nav-link text-light"> Beer </NavLink>
                    <NavLink to="/Wine" className="nav-link text-light"> Wine </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={{ pathname: "/Cart", state: this.props.check }} className="nav-link"> Cart ({unitTotal})</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Register" className="nav-link"> Register </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Login" className="nav-link"> Login </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Profile" className="nav-link"> Profile </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Admin" className="nav-link"> Admin </NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.logout}> Logout </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Switch>
                    <Route path="/Beer" component={Beer} />
                    <Route path="/Cart" render={(props) => <Cart cartData={this.props.check} />} />
                    <Route path="/Liquors" component={Liquors} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Profile" component={Profile} />
                    <Route path="/Admin" component={Admin} />
                    <Route path="/Register" component={Register} />
                    <Route path="/Wine" component={Wine} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Header);