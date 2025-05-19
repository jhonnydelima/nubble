import {apiAdapter} from '@api';
import {Page} from '@types';

import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(page: number): Promise<Page<Post>> {
  const apiResponse = await postApi.getList({page, per_page: 10});
  const postList = apiResponse.data.map(postAdapter.toPost);
  return {
    data: postList,
    meta: apiAdapter.toMetaDataPage(apiResponse.meta),
  };
}

export const postService = {
  getList,
};
