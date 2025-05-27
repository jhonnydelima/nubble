import {Box, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentsScreen({
  route,
}: AppScreenProps<'PostCommentsScreen'>) {
  const postId = route.params.postId;
  // const {data, loading} = usePostCommentList(postId);

  return (
    <Screen title="Comentários" canGoBack>
      <Box>
        <Text>Tela de comentários do Post: {postId}</Text>
      </Box>
    </Screen>
  );
}
