import { addFile } from './apiRequest';

const ipfsAPI = require('ipfs-api')

const ipfs = ipfsAPI('157.230.0.83', '5001', {protocol: 'http'});

export const uploadFileIPFS = (name, fileBuffer, changeButtonState) => {
  const ipfsFile = {
    path: '/' + name,
    content:  ipfs.types.Buffer.from(fileBuffer)
  };
  ipfs.files.add([ipfsFile])
    .then(results => 
      addFile(name, results[0].hash).then((err) => {
        if (err) {
          changeButtonState();
          throw err;
        }
        console.log('Successfull Upload');
        changeButtonState();
      }).catch(e => console.log('Server error', e))
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
