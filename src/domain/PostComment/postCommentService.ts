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

async function create(postId: number, message: string): Promise<PostComment> {
  const apiResponse = await postCommentApi.create(postId, message);
  return postCommentAdapter.toPostComment(apiResponse);
}

async function remove(postCommentId: number): Promise<string> {
  const apiResponse = await postCommentApi.remove(postCommentId);
  return apiResponse.message;
}

export const postCommentService = {
  getList,
  create,
  remove,
};
