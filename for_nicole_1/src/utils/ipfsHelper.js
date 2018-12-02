const ipfsAPI = require('ipfs-api');

export const ipfs = ipfsAPI('localhost', '5001', {protocol: 'http'});

// const uploadFileIPFS = (file) => {
//   // ipfs.files.mkdir('/ejemplo', (err) => {
//   //   if (err) {
//   //     console.error(err)
//   //   }
//     // ipfs.files.add([file])
//     //   .then(results => console.log(results)
//     // );
//   // })
// };