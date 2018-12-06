import React, { Component } from 'react';
import '../App.css';
import { onFileUpload } from '../utils/fileHelper';
import loading from './loading.gif';
import ReactLoading from 'react-loading';

//import { onFileUpload } from '../utils/fileHelper';

class FileInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fileName: '',
      files: [],
      disableButton: false,
      showSuccessMessage: false,
      loading: false,
      showErrorMessage: false
    };
  }

  changeButtonState() {
    this.setState({disableButton: !this.state.disableButton});
  }

  finishUpload() {
    this.setState({
      disableButton: false,
      showSuccessMessage: true,
      loading: false
    });
  }

  render() {
    return (
      <div>
        <div className="input-group mb-3 d-flex justify-content-center">
          <div className="input-group-prepend">
              <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03"
                onClick={() => {
                  if (this.state.files.length === 0) {
                    console.log('Debe ingresar un video');
                    return;
                  }
                  this.changeButtonState();
                  this.setState({loading: true});
                  try {
                    onFileUpload(this.state.files, this.finishUpload.bind(this));
                  } catch (error) {
                    this.setState({showErrorMessage: true, loading: false, disableButton: false});
                    console.log(error);
                  }
                }} disabled={this.state.disableButton}>
                Upload
              </button>
          </div>
          <div className="custom-file" >
            <input id="file-input" type="file" className="custom-file-input"
              onChange={(data) => this.setState({
                files: data.target.files,
                fileName: data.target.files && data.target.files[0] ? data.target.files[0].name : '',
                showErrorMessage: false,
                showSuccessMessage:false
                })}
            />
            <label className="custom-file-label">
              <h3>{ this.state.fileName !== '' ? this.state.fileName : "Upload your video" }</h3>
            </label>
          </div>
        </div>
        <div style={{textAlign: "center",display: "table", margin: "0 auto"}}>
          <p className="successfull-upload-message">
            { this.state.showSuccessMessage ?
            'Your video was successfully uploaded! It will remain pending of approval' : ''
            }
          </p>
          { this.state.loading ?
            <ReactLoading type='spin' color='#ffac42' height={100} width={50} /> : ''
          }
          <p className="successfull-upload-message">
            { this.state.showErrorMessage ?
            'There was an error. Please, try again.' : ''
            }
          </p>
        </div>
      </div>
    );
  }
}

export default FileInput;
