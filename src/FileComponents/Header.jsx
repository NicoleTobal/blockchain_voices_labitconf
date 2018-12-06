import React, { Component } from 'react';
import logo from '../logo.png';
import { NavLink } from "react-router-dom";
import { login } from '../utils/apiRequest';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
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

  renderLoginButton() {
    if (this.isNotAdmin()) {
      return (
        <li className="nav-item dropdown ml-auto">
          <button className="btn bmd-btn-fab dropdown-toggle person icon-1" type="button" id="ex4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="material-icons icon">person</i>
          </button>
          <div className="dropdown-menu dropdown-menu-right text-center">
              <div className="form-group">
                <label>Email address</label>
                <input onChange={(e) => this.setState({username: e.target.value, error: ''})}
                  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input onChange={(e) => this.setState({password: e.target.value, error: ''})}
                  type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
              </div>
              <p>{this.state.error}</p>
              <button className="btn" onClick={this.login.bind(this)}>Submit</button>

          </div>
        </li>
      );
    }
    return (
      <li className="nav-item active ml-auto">
        <a className="nav-link" onClick={() => {
          sessionStorage.clear();
          window.location.href = '/';
        }}>
          Logout<span className="sr-only">(current)</span>
        </a>
      </li>
    );
  }

  render() {
    return (
      <nav className="navbar navbar-expand  justify-content-end">
        <a className="navbar-brand logo" href="#"><img src={logo}></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav w-100">
            <li className="nav-item active">
              <NavLink to="/" className="nav-link">
                <button className="btn bmd-btn-fab dropdown-toggle person" type="button" id="ex4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="material-icons">home</i>
                </button>
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
            {this.renderLoginButton()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
