import { TextInput as RNTextInput, TextInputProps, TextStyle } from 'react-native';
import { Box, BoxProps } from '../Box/Box';
import { $fontFamilies, $fontSizes, Text } from '../Text/Text';
import { useAppTheme } from '../../hooks/useAppTheme';

interface Props extends TextInputProps {
  label: string;
}

export function TextInput({ label, ...textInputProps }: Props) {
  const { colors } = useAppTheme();
  return (
    <Box gap="s4">
      <Text preset="paragraphMedium" semiBold>
        {label}
      </Text>
      <Box {...$textInputContainer}>
        <RNTextInput
          placeholderTextColor={colors.gray2}
          style={$textInputStyle}
          {...textInputProps}
        />
      </Box>
    </Box>
  );
}

const $textInputContainer: BoxProps = {
  borderWidth: 1,
  p: 's16',
  borderColor: 'gray4',
  borderRadius: 's12',
};

const $textInputStyle: TextStyle = {
  borderWidth: 1,
  padding: 0,
  fontFamily: $fontFamilies.regular,
  ...$fontSizes.paragraphMedium,
};
