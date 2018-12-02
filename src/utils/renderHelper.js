import React, { Component } from 'react';
import { approveVideo, rejectVideo, deleteVideo } from './apiRequestHelper';

export const renderApprovedFiles = (videos) => {
  return videos.map((video) => <iframe src={"https://gateway.ipfs.io/ipfs/" + video.hash}/>);
};

export const renderSingleFile = (video) => {
  return <iframe src={"https://gateway.ipfs.io/ipfs/" + video.hash}/>;
};

export const renderActionButtons = (video) => {
  if (video.status === 'pending') {
    return (
      <div>
        <button onClick={() => approveVideo(video)}> appove </button>
        <button onClick={() => rejectVideo(video)}> reject </button>
      </div>
    );
  } else if (video.status === 'approved') {
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