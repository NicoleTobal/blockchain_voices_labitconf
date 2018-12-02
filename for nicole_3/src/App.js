import React, { Component } from 'react';
import './App.css';
import Highlights from './FileComponents/Highlights';
import Header from './FileComponents/Header';
import FileUploadMenu from './FileComponents/FileUploadMenu';
import AllFiles from './FileComponents/AllFiles';

class App extends Component {

  render() {
    return (
      <div >
        <Header />
        <FileUploadMenu />
        <Highlights/>
        <AllFiles />
      </div>
    );
  }
}

export default App;
