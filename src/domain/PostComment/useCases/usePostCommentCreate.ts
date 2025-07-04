import {PostComment, postCommentService} from '@domain';
import {MutationOptions, useMutation} from '@infra';

export function usePostCommentCreate(
  postId: number,
  options?: MutationOptions<PostComment>,
) {
  const {mutate, error, loading} = useMutation<string, PostComment>(
    message => postCommentService.create(postId, message),
    options,
  );

  async function createComment(message: string) {
    await mutate(message);
  }

  return {
    createComment,
    loading,
    error,
  };
}
