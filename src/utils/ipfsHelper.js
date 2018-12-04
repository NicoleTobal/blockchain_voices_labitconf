import { addFile } from './apiRequest';

const ipfsClient = require('ipfs-http-client')

const ipfs = ipfsClient('/ip4/127.0.0.1/tcp/5001')

export const uploadFileIPFS = (name, fileBuffer, changeButtonState) => {
  const ipfsFile = {
    path: '/' + name,
    content:  ipfs.types.Buffer.from(fileBuffer)
  };
  ipfs.files.add([ipfsFile])
    .then(results => {
        addFile(name, results[0].hash).then((err) => {
          changeButtonState();
        });
      }
    );
};

export const getApprovedFiles = (callback) => {
  ipfs.name.resolve('/ipns/' + process.env.REACT_APP_IPFS_FILES_KEY, (err, path) => {
    if (err) {
      console.log(err);
      callback([], err);
      return;
    }
    ipfs.ls(path, (err, files) => {
      if(err) {
        callback([], err);
      }
      console.log(files);
      callback(files);
    });
  });
};