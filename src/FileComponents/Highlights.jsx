import React, { Component } from 'react';
//import '../App.css';
//import { ipfs } from '../utils/ipfsHelper';
//import { onFileUpload } from '../utils/fileHelper';

class Highlights extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row" id="title-highlights">
            <h1>Highlights</h1>
          </div>
        </div>


        <div className="container-fluid container-highlights">
          <div className="row" id="highlights-videos-1">
            <div className="col-6 col-md-6 embed-responsive embed-responsive-16by9" id="highlights-center-big">
              <iframe title="0" src="https://www.youtube-nocookie.com/embed/SSo_EIwHSd4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="col-6 col-md-6 embed-responsive embed-responsive-16by9" id="highlights-center-big">
              <iframe title="1" src="https://www.youtube-nocookie.com/embed/MhLdsJo_IRM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-6 col-md-4 embed-responsive embed-responsive-16by9" id="highlights-center-big"><iframe src="https://www.youtube-nocookie.com/embed/SSo_EIwHSd4" title="2" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            <div className="col-6 col-md-4 embed-responsive embed-responsive-16by9" id="highlights-center-big"><iframe src="https://www.youtube-nocookie.com/embed/MhLdsJo_IRM" title="3" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            <div className="col-6 col-md-4 embed-responsive embed-responsive-16by9" id="highlights-center-big"><iframe src="https://www.youtube-nocookie.com/embed/MhLdsJo_IRM" title="4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Highlights;
