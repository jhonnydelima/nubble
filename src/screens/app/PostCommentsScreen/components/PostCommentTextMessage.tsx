import {useRef, useState} from 'react';
import {Keyboard} from 'react-native';

import {usePostCommentCreate} from '@domain';

import {TextMessage, TextMessageRef} from '@components';

interface Props {
  postId: number;
  onAddComment: () => void;
}

export function PostCommentTextMessage({postId, onAddComment}: Props) {
  const {createComment} = usePostCommentCreate(postId, {
    onSuccess: () => {
      clearInput();
      Keyboard.dismiss();
      onAddComment();
    },
  });
  const [message, setMessage] = useState('');
  const inputRef = useRef<TextMessageRef>(null);

  function clearInput() {
    inputRef.current?.blur();
    inputRef.current?.clear();
    setMessage('');
  }

  return (
    <TextMessage
      ref={inputRef}
      placeholder="Adicione um comentário"
      onPressSend={createComment}
      value={message}
      onChangeText={setMessage}
    />
  );
}
