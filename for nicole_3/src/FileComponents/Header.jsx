import React, { Component } from 'react';
import logo from '../logo.png';
import '../App.css';
//import { ipfs } from '../utils/ipfsHelper';
//import { onFileUpload } from '../utils/fileHelper';

class Header extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (

  <nav class="navbar fixed-top navbar-expand">
  <a class="navbar-brand logo" href="#"><img src={logo}></img></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav w-100">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item dropdown ml-auto">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Login
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
        <form className="text-center">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                  </div>
                  <button type="submit" className="btn">Submit</button>

                </form>
        </div>
      </li>
    </ul>  
  </div>
</nav>


    );
  }
}

export default Header;
