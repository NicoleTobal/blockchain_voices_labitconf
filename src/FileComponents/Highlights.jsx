import React, { Component } from 'react';
import '../App.css';
import video from './01\ NOV\ 2018.mov';
import video2 from './02\ NOV\ 2018-2.mov';

class Highlights extends Component {

  render() {
    return (
      <div>
        {/* <div className="container-fluid">
          <div className="row" id="title-highlights">
            <h1>Highlights</h1>
          </div>
        </div> */}


        <div className="container-fluid container-highlights">
          <div className="row" id="highlights-videos-1">
            <div className="col-md-6 embed-responsive embed-responsive-16by9" id="highlights-center-big">
              <video style={{padding: '5px'}} width="540" height="310" controls controlsList="nodownload">
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <div className="col-md-6 embed-responsive embed-responsive-16by9" id="highlights-center-big">
              <video style={{padding: '5px'}} width="540" height="310" controls controlsList="nodownload">
                <source src={video2} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Highlights;
