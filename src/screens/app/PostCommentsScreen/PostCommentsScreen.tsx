import {Box, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentsScreen({
  route,
}: AppScreenProps<'PostCommentsScreen'>) {
  const {postId} = route.params;
  return (
    <Screen canGoBack title="Comentários">
      <Box>
        <Text>Tela de comentários do Post: {postId}</Text>
      </Box>
    </Screen>
  );
}
