import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {Text} from '../Text/Text';
import { ButtonPreset, buttonPresets } from './buttonPresets';

interface ButtonProps extends TouchableOpacityBoxProps {
  preset?: ButtonPreset;
  title: string;
  loading?: boolean;
  disabled?: boolean;
}

export function Button({
  preset = 'primary',
  title,
  loading,
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      justifyContent="center"
      alignItems="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
