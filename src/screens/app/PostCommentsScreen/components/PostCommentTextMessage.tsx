import {useRef, useState} from 'react';
import {Keyboard} from 'react-native';

import {usePostCommentCreate} from '@domain';

import {TextMessage, TextMessageRef} from '@components';

interface Props {
  postId: number;
}

export function PostCommentTextMessage({postId}: Props) {
  const {createComment} = usePostCommentCreate(postId);
  const [message, setMessage] = useState('');
  const inputRef = useRef<TextMessageRef>(null);

  async function onPressSend() {
    const currentMessage = message;
    if (!currentMessage.trim()) {
      return;
    }
    inputRef.current?.blur();
    inputRef.current?.clear();
    setMessage('');
    Keyboard.dismiss();
    await createComment(currentMessage);
  }

  return (
    <TextMessage
      ref={inputRef}
      placeholder="Adicione um comentário"
      onPressSend={onPressSend}
      value={message}
      onChangeText={setMessage}
    />
  );
}
