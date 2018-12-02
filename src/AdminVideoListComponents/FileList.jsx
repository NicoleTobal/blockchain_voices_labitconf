import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import VideoPlayer from './VideoPlayer';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import { getAllFiles } from '../utils/apiRequest';
import { renderActionButtons, renderStatus } from '../utils/renderHelper';
//import '../App.css';
//import { ipfs } from '../utils/ipfsHelper';
//import { onFileUpload } from '../utils/fileHelper';

class FileList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
  }

  componentDidMount() {
    getAllFiles().then((result) => {
      const pendingVideos = result.data.filter(v => v.status === 'pending');
      const rejectedVideos = result.data.filter(v => v.status === 'rejected');
      const deletedVideos = result.data.filter(v => v.status === 'deleted');
      const approvedVideos = result.data.filter(v => v.status === 'approved');
      this.setState({
        videos: pendingVideos.concat(rejectedVideos.concat(deletedVideos.concat(approvedVideos)))
      });
    });
  }

  render() {
    return (
      <div className="">
        <BootstrapTable  data={ this.state.videos } striped={true} hover={true}>
          <TableHeaderColumn dataField="name" isKey={true} 
            dataFormat={(name, video) => <VideoPlayer name={name} hash={video.hash}/>}>
            File Name</TableHeaderColumn>
          <TableHeaderColumn dataField="status"
            dataFormat={renderStatus.bind(this)}>Approval Status</TableHeaderColumn>
          <TableHeaderColumn dataField="status"
            dataFormat={renderActionButtons.bind(this)}>Actions</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default FileList;
