import { TouchableOpacity } from 'react-native';
import { Text } from '../Text/Text';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';

interface ButtonProps {
  title: string;
}

export function Button({ title }: ButtonProps) {
  const { colors } = useTheme<Theme>();
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
