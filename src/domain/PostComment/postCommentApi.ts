import {api, PageAPI, PageParams} from '@api';

import {PostCommentAPI} from './postCommentTypes';

const POST_COMMENT_BASE_URL = '/user/post_comment';

async function getList(
  postId: number,
  pageParams?: PageParams,
): Promise<PageAPI<PostCommentAPI>> {
  const response = await api.get<PageAPI<PostCommentAPI>>(
    POST_COMMENT_BASE_URL,
    {
      params: {
        post_id: postId,
        ...pageParams,
      },
    },
  );
  return response.data;
}

async function create(
  postId: number,
  message: string,
): Promise<PostCommentAPI> {
  const response = await api.post<PostCommentAPI>(POST_COMMENT_BASE_URL, {
    post_id: postId,
    message,
  });
  return response.data;
}

async function remove(postCommentId: number): Promise<{message: string}> {
  const response = await api.delete<{message: string}>(
    `${POST_COMMENT_BASE_URL}/${postCommentId}`,
  );
  return response.data;
}

export const postCommentApi = {
  getList,
  create,
  remove,
};
