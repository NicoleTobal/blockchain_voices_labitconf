import React, { Component } from 'react';
import '../App.css';
import { ipfs } from '../utils/ipfsHelper';
//import { onFileUpload } from '../utils/fileHelper';

class FileInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fileName: '',
      files: []
    };
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
      <div className="input-group mb-3 d-flex justify-content-center">
        <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Button</button>
        </div>
        <div className="custom-file">
          <input id="file-input" type="file" className="custom-file-input"
            onChange={(data) => this.setState({
              files: data.target.files,
              fileName: data.target.files[0].name
              })}
          />
          <label className="custom-file-label">
            <h3>{ this.state.fileName !== '' ? this.state.fileName : "Upload your video" }</h3>
          </label>
        </div>
        {/* <input type="file"
            id="avatar" name="avatar"
            onChange={onFileUpload}/> */}
        {/* <iframe width="420" height="315"
          src="https://gateway.ipfs.io/ipfs/QmPgKRmjrdqxaxSzACsb16hqsqT96CReUmEhadoHKwhHBj">
        </iframe>
        <iframe width="420" height="315"
          src="https://gateway.ipfs.io/ipfs/QmdDnG6bZHUZjVS9aBNNAJjZhtqmLrEpyc8hLNCe79epRH">
        </iframe> */}
      </div>
    );
  }
}

export default FileInput;
