import React, { Component } from 'react';
//import '../App.css';
//import { ipfs } from '../utils/ipfsHelper';
//import { onFileUpload } from '../utils/fileHelper';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
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
              <a className="nav-link">About<span className="sr-only">(current)</span></a>
            </li>
          </ul>
          <div className="login">
            <a>Login</a>
          </div>

          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle.bind(this)}>
            <DropdownToggle
              tag="span"
              onClick={this.toggle.bind(this)}
              data-toggle="dropdown"
              aria-expanded={this.state.dropdownOpen}
            >
              Custom Dropdown Content
            </DropdownToggle>
            <DropdownMenu>
              <div onClick={this.toggle.bind(this)}>Custom dropdown item</div>
              <div onClick={this.toggle.bind(this)}>Custom dropdown item</div>
              <div onClick={this.toggle.bind(this)}>Custom dropdown item</div>
              <div onClick={this.toggle.bind(this)}>Custom dropdown item</div>
            </DropdownMenu>
          </Dropdown>
          <div className="singup">
            <button type="button" className="btn">Sign up</button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
