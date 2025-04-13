import { ActivityIndicator as RNActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { useAppTheme } from '@hooks';
import { ThemeColors } from '@theme';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({ color, ...activityIndicatorProps }: Props) {
  const { colors } = useAppTheme();
  return <RNActivityIndicator color={colors[color]} {...activityIndicatorProps} />;
}
