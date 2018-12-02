import React, { Component } from 'react';
import './App.css';
import Header from './FileComponents/Header';
import Home from './FileComponents/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import FileList from './AdminVideoListComponents/FileList';

class App extends Component {

  render() {
    return (
      <div style={{marginTop: "20%"}} >
        <Header />
        <Router>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/adminVideoList" component={FileList} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
