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