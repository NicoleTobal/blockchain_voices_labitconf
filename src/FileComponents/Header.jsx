import React, { Component } from 'react';
//import '../App.css';
//import { ipfs } from '../utils/ipfsHelper';
//import { onFileUpload } from '../utils/fileHelper';
import { NavLink } from "react-router-dom";
import { login } from '../utils/apiRequest';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      username: '',
      password: '',
      error: ''
    };
  }

  isNotAdmin() {
    return !sessionStorage.getItem('AUTH_TOKEN');
  }

  login() {
    if (this.state.password === '' || this.state.username === '') {
      this.setState({error: 'All fields must be completed'});
      return;
    }
    login(this.state.username, this.state.password).then((res) => {
      if (res.status !== 200) {
        console.log(res);
      } else {
        sessionStorage.setItem('AUTH_TOKEN', res.data.token);
        window.location.href = '/';
      }
    }).catch(e => this.setState({error: 'Invalid username or password'}));
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      error: ''
    });
  }

  renderLoginButton() {
    if (this.isNotAdmin()) {
      return (
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle.bind(this)}>
          <DropdownToggle
            tag="span"
            onClick={this.toggle.bind(this)}
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}
          >
            <div className="singup">
              <button type="button" className="btn">Login</button>
            </div>
          </DropdownToggle>
          <DropdownMenu style={{"padding": "10px"}}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input onChange={(e) => this.setState({username: e.target.value, error: ''})} type="email" className="form-control"
                id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input onChange={(e) => this.setState({password: e.target.value, error: ''})} type="password"
                className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <p>{this.state.error}</p>
            <button type="submit" className="btn btn-primary" onClick={this.login.bind(this)}>Submit</button>
          </DropdownMenu>
        </Dropdown>
      );
    }
    return (
      <a className="nav-link" onClick={() => {
        sessionStorage.clear();
        window.location.href = '/';
      }}>
        Logout<span className="sr-only">(current)</span>
      </a>
    );
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand"><img alt="5px" className="logo-1" src="img/logo.svg" /></a>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to="/" className="nav-link"> 
                About<span className="sr-only">(current)</span>
              </NavLink>
            </li>
            {
            this.isNotAdmin() ? '' :
                <li className="nav-item active">
                  <NavLink to="/adminVideoList" className="nav-link"> 
                    List<span className="sr-only">(current)</span>
                  </NavLink>
                </li>
            }
          </ul>
          {this.renderLoginButton()}
        </div>
      </nav>
    );
  }
}

export default Header;
