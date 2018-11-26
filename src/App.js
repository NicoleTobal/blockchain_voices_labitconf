import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var ipfsAPI = require('ipfs-api');

var ipfs = ipfsAPI('localhost', '5001', {protocol: 'http'});

class App extends Component {

  async readFile(file, callback) {
    const fr = new FileReader();
    fr.onload = function() {
      var arrayBuffer =  new Uint8Array(this.result);
      callback(arrayBuffer);
    };
    fr.readAsArrayBuffer(file);
  }

  uploadFileIPFS(file) {
    // ipfs.files.mkdir('/ejemplo', (err) => {
    //   if (err) {
    //     console.error(err)
    //   }
      ipfs.files.add([file])
        .then(results => console.log(results)
      );
    // })
  };

  onFileUpload(data) {
    const files = data.target.files;
    const filesToInsert = [];
    for (var i = 0; i < files.length; i++) {
      const name = files[i].name;
      this.readFile(files[i], (buffer) => {
        this.uploadFileIPFS({
          path: '/ejemplo/' + name,
          content:  ipfs.types.Buffer.from(buffer)
        });
      });
    }
  }

  componentWillMount() {
    ipfs.ls('QmaYJhArZRAoec7eRpKN1c5tcXbF5ESmGMLrdnibTKn8To', (err, files) => {
      console.log(files);
    });
    ipfs.ls('QmVAE7TWRgdaJkfhuKatw3jUNEFKfesHxBqyrwoZdgs1AC', (err, files) => {
      console.log(files);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="file"
            id="avatar" name="avatar"
            onChange={this.onFileUpload.bind(this)}/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <iframe>
          </iframe>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          {/* <video width="320" height="240" controls>
            <source src="/videos/IMG_2062.MOV" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
            Learn React */}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
