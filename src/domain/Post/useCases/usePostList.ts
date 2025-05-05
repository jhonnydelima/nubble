import {useEffect, useState} from 'react';

import {Post, postService} from '@domain';

export function usePostList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [postList, setPostList] = useState<Post[]>([]);

  async function fetchData() {
    try {
      setError(false);
      setLoading(true);
      const list = await postService.getList();
      setPostList(list);
    } catch (err) {
      console.log('ERROR => ', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    loading,
    error,
    postList,
    refetch: fetchData,
  };
}
