import {Dimensions} from 'react-native';

import {ToastPosition, ToastProps, ToastType} from '@services';

import {Box, BoxProps, Icon, IconProps, Text} from '@components';
import {$shadowProps} from '@theme';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

interface Props {
  toast: ToastProps;
}

export function ToastContent({toast}: Props) {
  const position: ToastPosition = toast.position || 'top';
  const type: ToastType = toast.type || 'success';

  return (
    <Box {...$boxStyle} style={[{[position]: 100}, $shadowProps]}>
      <Icon {...mapTypeToIcon[type]} />
      <Text style={{flexShrink: 1}} ml="s16" preset="paragraphMedium" bold>
        {toast.message}
      </Text>
    </Box>
  );
}

const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {name: 'checkRound', color: 'success'},
  error: {name: 'errorRound', color: 'error'},
};

const $boxStyle: BoxProps = {
  flexDirection: 'row',
  backgroundColor: 'background',
  opacity: 0.95,
  alignItems: 'center',
  p: 's16',
  borderRadius: 's16',
  maxWidth: MAX_WIDTH,
};
