import { Pressable, TextInput as RNTextInput, TextInputProps, TextStyle } from 'react-native';
import { Box, BoxProps } from '../Box/Box';
import { $fontFamilies, $fontSizes, Text } from '../Text/Text';
import { useAppTheme } from '../../hooks/useAppTheme';
import { useRef } from 'react';

interface Props extends TextInputProps {
  label: string;
}

export function TextInput({ label, ...textInputProps }: Props) {
  const { colors } = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Pressable onPress={focusInput}>
      <Box gap="s4">
        <Text preset="paragraphMedium" semiBold>
          {label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInputStyle}
            {...textInputProps}
          />
        </Box>
      </Box>
    </Pressable>
  );
}

const $textInputContainer: BoxProps = {
  borderWidth: 1,
  p: 's16',
  borderColor: 'gray4',
  borderRadius: 's12',
};

const $textInputStyle: TextStyle = {
  padding: 0,
  fontFamily: $fontFamilies.regular,
  ...$fontSizes.paragraphMedium,
};
