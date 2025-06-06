import {useState} from 'react';

import {postCommentService} from '@domain';

interface Options {
  onSuccess?: () => void;
  onError?: (message: string) => void;
}

export function usePostCommentCreate(postId: number, options?: Options) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function createComment(message: string) {
    try {
      setLoading(true);
      setError(null);
      await postCommentService.create(postId, message);
      if (options?.onSuccess) {
        options.onSuccess();
      }
    } catch (err) {
      setError(true);
      if (options?.onError) {
        options.onError(`Erro ao criar comentário. ${(err as Error).message}`);
      }
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
