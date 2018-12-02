const axios = require('axios');

export const addFile = (name, hash) => {
  return axios({
    method: 'post',
    url: 'http://localhost:3007/api/add_file',
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
    url: 'http://localhost:3007/api/login',
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
    method: 'post',
    url: 'http://localhost:3007/api/admin/get_files',
    data: {},
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': sessionStorage.getItem('AUTH_TOKEN')
    }
  });
}