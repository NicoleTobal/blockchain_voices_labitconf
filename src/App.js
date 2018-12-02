import React, { Component } from 'react';
import './App.css';
import Header from './FileComponents/Header';
import Home from './FileComponents/Home';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import FileList from './AdminVideoListComponents/FileList';

class App extends Component {

  renderAdminComponent(component) {
    if (!sessionStorage.getItem('AUTH_TOKEN')) {
      return () => <Redirect to="/"/>;
    }
    return component;
  }

  render() {
    return (
      <div style={{marginTop: "20%"}} >
        <Header />
        <Router>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/adminVideoList" component={this.renderAdminComponent(FileList)} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
