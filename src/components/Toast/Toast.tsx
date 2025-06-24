import {useEffect} from 'react';
import {Dimensions} from 'react-native';

import {ToastProps, useToast} from '@services';

import {Box, BoxProps, Icon, Text} from '@components';
import {$shadowProps} from '@theme';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;
const DEFAULT_DURATION = 2000;

export function Toast() {
  const {toast, hideToast} = useToast();
  const position: Required<ToastProps>['position'] = toast?.position || 'top';

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hideToast();
      }, toast.duration || DEFAULT_DURATION);
    }
  }, [toast, hideToast]);

  if (!toast) {
    return null;
  }

  return (
    <Box {...$boxStyle} style={[{[position]: 100}, $shadowProps]}>
      <Icon color="success" name="checkRound" />
      <Text style={{flexShrink: 1}} ml="s16" preset="paragraphMedium" bold>
        {toast.message}
      </Text>
    </Box>
  );
}

const $boxStyle: BoxProps = {
  position: 'absolute',
  flexDirection: 'row',
  backgroundColor: 'background',
  opacity: 0.95,
  alignSelf: 'center',
  alignItems: 'center',
  p: 's16',
  borderRadius: 's16',
  maxWidth: MAX_WIDTH,
};
