import {Dimensions} from 'react-native';

import {Box, BoxProps, Icon, Text} from '@components';
import {$shadowProps} from '@theme';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

export function Toast() {
  return (
    <Box top={100} {...$boxStyle}>
      <Icon color="success" name="checkRound" />
      <Text style={{flexShrink: 1}} ml="s16" preset="paragraphMedium" bold>
        Toast component
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
  style: {...$shadowProps},
};
