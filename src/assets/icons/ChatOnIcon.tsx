import React from 'react';

import {Svg, Path, Circle} from 'react-native-svg';

import {BaseIcon} from '@components';

export function ChatOnIcon({size = 20, color = 'black'}: BaseIcon) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0C4.47715 0 0 4.47715 0 10C0 11.7154 0.432562 13.3319 1.19499 14.7442L0.474166 18.6158C0.427083 18.8687 0.50765 19.1286 0.689541 19.3105C0.871432 19.4923 1.13128 19.5729 1.38416 19.5258L5.2558 18.805C6.6681 19.5674 8.28461 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM1.5607 10C1.5607 5.3391 5.3391 1.5607 10 1.5607C14.6609 1.5607 18.4393 5.33911 18.4393 10C18.4393 14.6608 14.6608 18.4393 10 18.4393C8.46158 18.4393 7.02143 18.0283 5.7809 17.3108C5.61969 17.2175 5.43044 17.185 5.24735 17.2191L2.21669 17.7833L2.78094 14.7527C2.81503 14.5696 2.78251 14.3803 2.68926 14.2191C1.97165 12.9785 1.5607 11.5384 1.5607 10ZM5.5319 8.15606C5.5319 7.72508 5.88127 7.37571 6.31225 7.37571H13.688C14.1189 7.37571 14.4683 7.72508 14.4683 8.15606C14.4683 8.58704 14.1189 8.93641 13.688 8.93641H6.31225C5.88127 8.93641 5.5319 8.58704 5.5319 8.15606ZM5.5319 11.8439C5.5319 11.413 5.88127 11.0636 6.31225 11.0636H10.0001C10.4311 11.0636 10.7805 11.413 10.7805 11.8439C10.7805 12.2749 10.4311 12.6243 10.0001 12.6243H6.31225C5.88127 12.6243 5.5319 12.2749 5.5319 11.8439Z"
        fill={color}
      />
      <Circle cx="17" cy="5" r="3" fill="black" />
    </Svg>
  );
}
