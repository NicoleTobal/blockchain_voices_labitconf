import { uploadFileIPFS } from "./ipfsHelper";

const readFile = async (file, callback) => {
  const fr = new FileReader();
  fr.onload = function() {
    var arrayBuffer =  new Uint8Array(this.result);
    callback(arrayBuffer);
  };
  fr.readAsArrayBuffer(file);
};

export const onFileUpload = (files, changeButtonState) => {
  for (var i = 0; i < files.length; i++) {
    const name = files[i].name;
    readFile(files[i], (buffer) =>
      uploadFileIPFS(name, buffer, changeButtonState)
    );
  }
};