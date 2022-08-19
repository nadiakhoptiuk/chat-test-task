import axios from 'axios';
const BASE_URL = 'https://api.chucknorris.io/jokes/random';

export default function getChuckResponce() {
  return axios({
    method: 'get',
    url: BASE_URL,
  }).then(response => response.data.value);
}

console.log(getChuckResponce());
