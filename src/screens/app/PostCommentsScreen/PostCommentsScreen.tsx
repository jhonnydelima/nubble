import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';

import {Box, Screen} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

import {PostCommentItem} from './components/PostCommentItem';
import {PostCommentsBottom} from './components/PostCommentsBottom';
import {PostCommentTextMessage} from './components/PostCommentTextMessage';

export function PostCommentsScreen({
  route,
}: AppScreenProps<'PostCommentsScreen'>) {
  const postId = route.params.postId;
  const {data, fetchNextPage, hasNextPage} = usePostCommentList(postId);
  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  return (
    <Screen flex={1} title="Comentários" canGoBack>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: bottom + 16}}
          ListFooterComponent={
            <PostCommentsBottom
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
            />
          }
        />
        <PostCommentTextMessage postId={postId} />
      </Box>
    </Screen>
  );
}
