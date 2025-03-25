import { TextInput as RNTextInput, TextInputProps } from 'react-native';
import { Box, BoxProps } from '../Box/Box';
import { Text } from '../Text/Text';

interface Props extends TextInputProps {
  label: string;
}

export function TextInput({ label, ...textInputProps }: Props) {
  return (
    <Box gap="s4">
      <Text preset="paragraphMedium" semiBold>
        {label}
      </Text>
      <Box {...$textInputContainer}>
        <RNTextInput style={{borderWidth: 1, height: 50 }} {...textInputProps} />
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
