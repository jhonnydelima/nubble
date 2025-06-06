import {useState} from 'react';

import {postCommentService} from '@domain';

export function usePostCommentCreate(postId: number) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function createComment(message: string) {
    try {
      setLoading(true);
      setError(null);
      return postCommentService.create(postId, message);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    createComment,
    loading,
    error,
  };
}
