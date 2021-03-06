import { approveFile, rejectFile, deleteFile } from "./apiRequest";

export const approveVideo = (video) => {
  approveFile(video.hash);
  window.location.href = '/adminVideoList';
};

export const rejectVideo = (video) => {
  rejectFile(video.hash);
  window.location.href = '/adminVideoList';
};

export const deleteVideo = (video) => {
  deleteFile(video.hash);
  window.location.href = '/adminVideoList';
};