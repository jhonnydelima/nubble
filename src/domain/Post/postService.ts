import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(): Promise<Post[]> {
  const apiResponse = await postApi.getList();
  const postList = apiResponse.data.map(postAdapter.toPost);
  return postList;
}

export const postService = {
  getList,
};
