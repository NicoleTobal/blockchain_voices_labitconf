import React, { Component } from 'react';
import FileInput from './FileInput';

class FileUploadMenu extends Component {

  render() {
    return (
      <div className="landing-page-title">

        <div id="landing-page-title" className="container-fluid">
          <div className="row">
            <div id="title-landing" className="col-md-12 mx-auto">
              <h1>Enabling Inclusion</h1>
            </div>
          </div>
        </div>

        <div id="landing-page-text" className="container-fluid">
          <div className="row">
            <div id="text-landing" className="col-md-12 mx-auto d-flex justify-content-center">
              <p>We believe in a world where everybody has a voice.  a world with equal opportunites.
        And we also believe that blockchain technologies will become a tool to enable you to raise your voice.
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div id="center-input" className="col-lg-12  mx-auto input-group mb-3 d-flex justify-content-center">
              <FileInput />
            </div>
          </div>
        </div>

        <div className="col-md-12 floating" id="img-landing"><img src="img/video-camera-2.svg"/>
        </div>

      </div>
    );
  }
}

export default FileUploadMenu;
