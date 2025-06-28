import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization:
      'Bearer Mw.OpL22bN8jZOXaCbRDXCyLElBkyIzN3k-ddaAosaderq7fQQLTe8BSpGE-FRT',
  },
});
