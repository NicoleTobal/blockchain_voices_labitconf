const axios = require('axios');

const backUrl = "http://localhost:3007/api";

export const addFile = (name, hash) => {
  return axios({
    method: 'post',
    url: backUrl + '/add_file',
    data: {
      name,
      hash
    },
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export const login = (username, password) => {
  return axios({
    method: 'post',
    url: backUrl + '/login',
    data: {
      username,
      password
    },
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export const getAllFiles = () => {
  return axios({
    method: 'get',
    url: backUrl + '/admin/get_files',
    data: {},
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': sessionStorage.getItem('AUTH_TOKEN')
    }
  });
}

export const approveFile = (hash) => {
  return axios({
    method: 'post',
    url: backUrl + '/admin/approve_file',
    data: {
      hash
    },
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': sessionStorage.getItem('AUTH_TOKEN')
    }
  });
}

export const rejectFile = (hash) => {
  return axios({
    method: 'post',
    url: backUrl + '/admin/reject_file',
    data: {
      hash
    },
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': sessionStorage.getItem('AUTH_TOKEN')
    }
  });
}

export const deleteFile = (hash) => {
  return axios({
    method: 'post',
    url: backUrl + '/admin/delete_file',
    data: {
      hash
    },
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': sessionStorage.getItem('AUTH_TOKEN')
    }
  });
}