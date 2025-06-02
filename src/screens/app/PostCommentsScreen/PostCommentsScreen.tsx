import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';

import {Screen} from '@components';
import {AppScreenProps} from '@routes';

import {PostCommentItem} from './components/PostCommentItem';

export function PostCommentsScreen({
  route,
}: AppScreenProps<'PostCommentsScreen'>) {
  const postId = route.params.postId;
  const {data} = usePostCommentList(postId);

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  return (
    <Screen title="Comentários" canGoBack>
      <FlatList data={data} renderItem={renderItem} />
    </Screen>
  );
}
