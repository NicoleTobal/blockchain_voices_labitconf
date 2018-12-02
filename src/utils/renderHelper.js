import React, { Component } from 'react';
import { approveVideo, rejectVideo, deleteVideo } from './apiRequestHelper';

export const renderApprovedFile = (video) => {
  return <iframe src={"https://gateway.ipfs.io/ipfs/" + video.hash}/>;
};

export const renderActionButtons = (status, video) => {
  if (status === 'pending') {
    return (
      <div>
        <button onClick={() => approveVideo(video)}> appove </button>
        <button onClick={() => rejectVideo(video)}> reject </button>
      </div>
    );
  } else if (status === 'approved') {
    return (
      <div>
        <button onClick={() => deleteVideo(video)}> cancel </button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => approveVideo(video)}> approve </button>
      </div>
    );
  }
};

export const renderStatus = (status) => {
  switch(status) {
    case 'pending':
      return 'Pending';
    case 'approved':
      return 'Approved';
    case 'rejected':
      return 'Rejected';
    default:
      return 'Deleted';
  }
};