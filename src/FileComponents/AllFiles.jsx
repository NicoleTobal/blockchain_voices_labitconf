import React, { Component } from 'react';
import { getApprovedFiles } from '../utils/ipfsHelper';
import { renderApprovedFile } from '../utils/renderHelper';
//import '../App.css';
//import { ipfs } from '../utils/ipfsHelper';
//import { onFileUpload } from '../utils/fileHelper';

class AllFiles extends Component {

  constructor(props) {
    super(props);
    this.state={
      files: []
    }
  }
  
  componentDidMount() {
    getApprovedFiles((files, err) => {
      if (err) {
        console.log(err)
      } else {
        console.log(files);
        this.setState({files});
      }
    });
  }

  renderVideos() {
    const {files} = this.state;
    const rows = files.length % 6 === 0 ? (files.length / 6 ) : (files.length / 6 + 1);
    const videoRows = [];
    for (let i=0; i < rows; i++) {
      videoRows.push(files.slice(i * 6, (i * 6) + 6));
    }
    return videoRows.map((videoRow, rowIndex) => (
      <div className="container-fluid" key={rowIndex}>
        <div className="row">
          {videoRow.map((video, videoIndex) => (
            <div key={videoIndex} className="col-6 col-md-2 embed-responsive embed-responsive-16by9" id="categories-videos">
              {renderApprovedFile(video)}
            </div>
          ))}
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div>
        {/* <div className="container-fluid">
          <div className="row" id="categories-highlights">
            <h1>Blockchain</h1>
          </div>
        </div> */}
        {this.renderVideos()}
      </div>
    );
  }
}

export default AllFiles;
