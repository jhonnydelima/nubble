import React from 'react';

import {Svg, Path, Circle} from 'react-native-svg';

import {BaseIcon} from '@components';
import {palette} from '@theme';

export function ErrorRoundIcon({
  size = 48,
  color = palette.redError,
}: BaseIcon) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <Circle cx="24" cy="24" r="24" fill={color} />
      <Path
        d="M15 15.0004L31.2279 31.9996M15.7728 32L32 15"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </Svg>
  );
}
