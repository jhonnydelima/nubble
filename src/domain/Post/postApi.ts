import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer MQ.LfuWozFZMG_KTl_5w45sALiEPHRP08XuKBGrdB7Ag-C1FKib33qquS7g_lhv',
    },
  });

  let data = await response.json();
  console.log(data);
  // await new Promise(resolve => setTimeout(resolve, 1000));
  return postListMock;
}

export const postApi = {
  getList,
};
