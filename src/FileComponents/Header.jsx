import React, { Component } from 'react';
//import '../App.css';
//import { ipfs } from '../utils/ipfsHelper';
//import { onFileUpload } from '../utils/fileHelper';

class Header extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#"><img className="logo-1" src="img/logo.svg" /></a>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">About<span className="sr-only">(current)</span></a>
            </li>
          </ul>
          <div className="login">
            <a href="#">Login</a>
          </div>
          <div className="singup">
            <button type="button" className="btn">Sign up</button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
