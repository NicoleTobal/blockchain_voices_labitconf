import React, { Component } from 'react';

export const renderApprovedFIles = (videos) => {
  return videos.map((video) => <iframe src={"https://gateway.ipfs.io/ipfs/" + video.hash}/>);
};