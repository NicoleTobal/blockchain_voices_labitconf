import React, { Component } from 'react';
import Highlights from './Highlights';
import FileUploadMenu from './FileUploadMenu';
import AllFiles from './AllFiles';

class App extends Component {

  render() {
    return (
      <div>
        <FileUploadMenu />
        <Highlights />
        <AllFiles />
      </div>
    );
  }
}

export default App;
