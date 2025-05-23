import {apiAdapter} from '@api';
import {Page} from '@types';

import {postCommentAdapter} from './postCommentAdapter';
import {postCommentApi} from './postCommentApi';
import {PostComment} from './postCommentTypes';

const COMMENTS_PER_PAGE = 10;

async function getList(
  postId: number,
  page: number,
): Promise<Page<PostComment>> {
  const apiResponse = await postCommentApi.getList(postId, {
    page,
    per_page: COMMENTS_PER_PAGE,
  });
  const postCommentList = apiResponse.data.map(
    postCommentAdapter.toPostComment,
  );
  return {
    data: postCommentList,
    meta: apiAdapter.toMetaDataPage(apiResponse.meta),
  };
}

export const postService = {
  getList,
};
