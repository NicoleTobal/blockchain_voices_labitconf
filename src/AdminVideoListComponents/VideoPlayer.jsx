import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
//import '../App.css';
//import { ipfs } from '../utils/ipfsHelper';
//import { onFileUpload } from '../utils/fileHelper';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class VideoPlayer extends Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <a onClick={this.openModal} style={{cursor: 'pointer'}}>{this.props.name}</a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <div>
            <a onClick={this.closeModal}>close</a>
          </div>
          <div>
            <video style={{padding: '5px'}} width="540" height="310" controls controlsList="nodownload">
              <source src={"https://gateway.ipfs.io/ipfs/" + this.props.hash} type="video/mp4" />
            </video>
          </div>
        </Modal>
      </div>
    );
  }
}

export default VideoPlayer;
