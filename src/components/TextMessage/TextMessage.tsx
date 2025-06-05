import {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import {useAppTheme} from '@hooks';

import {Box} from '../Box/Box';
import {Text} from '../Text/Text';
import {$textInputStyle} from '../TextInput/TextInput';

export interface TextMessageProps extends RNTextInputProps {
  onPressSend: () => void;
}

export function TextMessage({
  onPressSend,
  value,
  ...textMessageProps
}: TextMessageProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  const isSendDisabled = !value || value.trim().length === 0;

  return (
    <Pressable onPress={focusInput}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray5"
        borderRadius="s12">
        <RNTextInput
          ref={inputRef}
          placeholderTextColor={colors.gray2}
          style={[$textInputStyle, {color: colors.gray1}]}
          {...textMessageProps}
        />
        <Pressable disabled={isSendDisabled} onPress={onPressSend}>
          <Text color={isSendDisabled ? 'gray2' : 'primary'} bold>
            Enviar
          </Text>
        </Pressable>
      </Box>
    </Pressable>
  );
}
