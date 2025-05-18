import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(page: number): Promise<Post[]> {
  const apiResponse = await postApi.getList({page, per_page: 10});
  const postList = apiResponse.data.map(postAdapter.toPost);
  return postList;
}

export const postService = {
  getList,
};
