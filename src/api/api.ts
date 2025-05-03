import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization:
      'Bearer MQ.LfuWozFZMG_KTl_5w45sALiEPHRP08XuKBGrdB7Ag-C1FKib33qquS7g_lhv',
  },
});
