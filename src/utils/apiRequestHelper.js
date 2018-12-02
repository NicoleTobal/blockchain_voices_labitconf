import { approveFile, rejectFile, deleteFile } from "./apiRequest";

export const approveVideo = (video) => {
  approveFile(video.hash);
};

export const rejectVideo = (video) => {
  rejectFile(video.hash);
};

export const deleteVideo = (video) => {
  deleteFile(video.hash);
};