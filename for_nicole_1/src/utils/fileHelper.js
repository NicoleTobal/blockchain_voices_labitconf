const readFile = async (file, callback) => {
  const fr = new FileReader();
  fr.onload = function() {
    var arrayBuffer =  new Uint8Array(this.result);
    callback(arrayBuffer);
  };
  fr.readAsArrayBuffer(file);
};

export const onFileUpload = (data) => {
  const files = data.target.files;
  //const filesToInsert = [];
  for (var i = 0; i < files.length; i++) {
    //const name = files[i].name;
    readFile(files[i], (buffer) => {
      // this.uploadFileIPFS({
      //   path: '/ejemplo/' + name,
      //   content:  ipfs.types.Buffer.from(buffer)
      // });
    });
  }
};