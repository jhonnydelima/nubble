import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {BaseIcon} from '../../components/Icon/Icon';

export function ProfileFillIcon({size = 20, color = 'black'}: BaseIcon) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color}
        d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM4.95654 16.7365C4.77348 17.0361 4.43795 17.088 4.2056 16.852C3.97245 16.6151 3.93149 16.178 4.11412 15.8756L4.5267 16.2948C4.11412 15.8756 4.11432 15.8753 4.11452 15.8749L4.11496 15.8742L4.11596 15.8726L4.11841 15.8686L4.12512 15.8578C4.13041 15.8494 4.13731 15.8385 4.14587 15.8254C4.16298 15.7993 4.18669 15.7641 4.2172 15.7211C4.2782 15.6352 4.36645 15.5184 4.48348 15.3811C4.71755 15.1064 5.06707 14.7497 5.54403 14.3962C6.50139 13.6865 7.95857 13 9.99997 13C12.0414 13 13.4986 13.6865 14.4559 14.3962C14.9329 14.7497 15.2824 15.1064 15.5165 15.3811C15.6335 15.5184 15.7218 15.6352 15.7828 15.7211C15.8133 15.764 15.837 15.7993 15.8541 15.8254C15.8627 15.8385 15.8696 15.8494 15.8749 15.8578L15.8816 15.8686L15.884 15.8726L15.885 15.8742L15.8855 15.8749C15.8857 15.8753 15.8859 15.8756 15.4888 16.279L15.8859 15.8756C16.0685 16.178 16.0276 16.6151 15.7944 16.852C15.5621 17.088 15.2265 17.0361 15.0435 16.7365L15.0433 16.7362L15.0428 16.7355L15.036 16.7249C15.0282 16.7129 15.0142 16.692 14.994 16.6636C14.9537 16.6068 14.8885 16.5199 14.797 16.4126C14.6141 16.198 14.3267 15.9025 13.9237 15.6038C13.1212 15.009 11.8466 14.391 9.99997 14.391C8.15338 14.391 6.87872 15.009 6.07623 15.6038C5.67327 15.9025 5.38586 16.198 5.20299 16.4126C5.11155 16.5199 5.04632 16.6068 5.00596 16.6636C4.98579 16.692 4.97185 16.7129 4.96398 16.7249L4.95671 16.7362L4.95654 16.7365ZM9.99943 3.71796C8.06993 3.71796 6.50586 5.28209 6.50586 7.21153C6.50586 9.14102 8.06994 10.7051 9.99943 10.7051C11.9289 10.7051 13.493 9.14102 13.493 7.21153C13.493 5.28209 11.9289 3.71796 9.99943 3.71796ZM7.91607 7.21153C7.91607 6.06092 8.84879 5.12817 9.99943 5.12817C11.1501 5.12817 12.0828 6.06092 12.0828 7.21153C12.0828 8.36218 11.1501 9.29489 9.99943 9.29489C8.84878 9.29489 7.91607 8.36218 7.91607 7.21153Z"
      />
    </Svg>
  );
}
