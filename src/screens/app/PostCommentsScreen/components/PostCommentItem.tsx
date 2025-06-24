import {Alert, Pressable} from 'react-native';

import {PostComment, postCommentService, usePostCommentRemove} from '@domain';
import {useToast} from '@services';

import {Box, ProfileAvatar, Text} from '@components';

interface Props {
  postComment: PostComment;
  userId: number;
  postAuthorId: number;
  onRemoveComment: () => void;
}

export function PostCommentItem({
  postComment,
  userId,
  postAuthorId,
  onRemoveComment,
}: Props) {
  const {showToast} = useToast();
  const {mutate} = usePostCommentRemove({
    onSuccess: () => {
      onRemoveComment();
      showToast({
        message: 'Comentário deletado',
        duration: 5000,
      });
    },
  });

  const isAllowedToRemove = postCommentService.isAllowedToRemove(
    postComment,
    userId,
    postAuthorId,
  );

  function handleConfirmCommentRemoval() {
    Alert.alert('Deseja excluir este comentário?', 'Pressione "Confirmar"', [
      {
        text: 'Confirmar',
        onPress: () => mutate({postCommentId: postComment.id}),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }

  return (
    <Pressable
      disabled={!isAllowedToRemove}
      onLongPress={handleConfirmCommentRemoval}>
      <Box flexDirection="row" alignItems="center" gap="s12" mb="s16">
        <ProfileAvatar imageUrl={postComment.author.profileURL} />
        <Box flex={1}>
          <Box flexDirection="row" gap="s4">
            <Text preset="paragraphSmall" bold>
              {postComment.author.userName}
            </Text>
            <Text preset="paragraphSmall" color="gray1">
              - {postComment.createdAtRelative}
            </Text>
          </Box>
          <Text preset="paragraphSmall" color="gray1">
            {postComment.message}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}
