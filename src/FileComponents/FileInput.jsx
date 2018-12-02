import React, { Component } from 'react';
import '../App.css';
import { onFileUpload } from '../utils/fileHelper';
//import { onFileUpload } from '../utils/fileHelper';

class FileInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fileName: '',
      files: [],
      disableButton: false,
      showSuccessMessage: false
    };
  }

  changeButtonState() {
    this.setState({disableButton: !this.state.disableButton});
  }

  finishUpload() {
    this.setState({
      disableButton: false,
      showSuccessMessage: true
    });
  }

  render() {
    return (
      <div className="input-group mb-3 d-flex justify-content-center">
        <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03"
              onClick={() => {
                if (this.state.files.length === 0) {
                  console.log('Debe ingresar un video');
                  return;
                }
                this.changeButtonState();
                onFileUpload(this.state.files, this.finishUpload.bind(this));
              }} disabled={this.state.disableButton}>
              Button
            </button>
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
        <div>
          <p>
            { this.state.showSuccessMessage ?
            'Your video was successfully uploaded! It will remain pending of approval' : ''
            }
          </p>
        </div>
      </div>
    );
  }
}

export default FileInput;
