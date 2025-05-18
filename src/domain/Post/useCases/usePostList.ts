import {useEffect, useState} from 'react';

import {Post, postService} from '@domain';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  async function fetchData() {
    try {
      setError(false);
      setLoading(true);
      const list = await postService.getList(page);
      setPostList(prevList => [...prevList, ...list]);
      setPage(prevPage => prevPage + 1);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function fetchNextPage() {
    if (!loading) {
      fetchData();
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    error,
    postList,
    refetch: fetchData,
    fetchNextPage,
  };
}
