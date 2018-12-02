import { addFile } from './apiRequest';

const ipfsAPI = require('ipfs-api');

const ipfs = ipfsAPI('localhost', '5001', {protocol: 'http'});

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

export const showApprovedFiles = () => {
  ipfs.name.resolve('/ipns/' + process.env.IPFS_FILES_KEY, (err, path) => {
    if (err) {
      console.log(err);
      return;
    }
    ipfs.ls(path, (err, files) => {
      console.log(files);
    });
  });
};