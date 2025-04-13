import { Pressable, TextInput as RNTextInput, TextInputProps as RNTextInputProps, TextStyle } from 'react-native';
import { $fontFamilies, $fontSizes, Text } from '../Text/Text';
import { Box, BoxProps } from '../Box/Box';
import { useAppTheme } from '@hooks';
import { useRef, ReactElement } from 'react';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  RightComponent?: ReactElement;
  boxProps?: BoxProps;
}

export function TextInput({
  label,
  errorMessage,
  RightComponent,
  boxProps,
  ...textInputProps
}: TextInputProps) {
  const { colors } = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $textInputContainer: BoxProps = {
    flexDirection: 'row',
    borderWidth: errorMessage ? 2 : 1,
    p: 's16',
    borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's12',
  };

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Text preset="paragraphMedium" semiBold>
          {label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            autoCapitalize="none"
            style={$textInputStyle}
            {...textInputProps}
          />
          {RightComponent && (
            <Box ml="s16" justifyContent="center">
              {RightComponent}
            </Box>
          )}
        </Box>
        {errorMessage && (
          <Text color="error" preset="paragraphSmall">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  flex: 1,
  padding: 0,
  fontFamily: $fontFamilies.regular,
  ...$fontSizes.paragraphMedium,
};
