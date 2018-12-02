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

  renderMainComponent(getComponent) {
    return () => (
      <div>
        <Header />
        {getComponent()}
      </div>
    )
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path="/" exact component={this.renderMainComponent(() => <Home />)} />
            <Route path="/adminVideoList" component={this.renderAdminComponent(
              this.renderMainComponent(() => <FileList />))} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
