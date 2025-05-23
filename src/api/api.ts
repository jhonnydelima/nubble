import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization:
      'Bearer MQ.08nQMDHxfTiuD1cTiQxYBfwkGJhaIHkfIPPcKQzDb4p5GVZmuaA9s__xDV8U',
  },
});
