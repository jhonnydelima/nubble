import {
  createBox,
  createRestyleComponent,
  backgroundColor,
  BackgroundColorProps,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
} from '@shopify/restyle';
import {Theme} from '@theme';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

export const Box = createBox<Theme>();
export interface BoxProps extends React.ComponentProps<typeof Box> {}

export interface TouchableOpacityBoxProps
  extends TouchableOpacityProps,
    BackgroundColorProps<Theme>,
    SpacingProps<Theme>,
    SpacingShorthandProps<Theme>,
    LayoutProps<Theme>,
    BorderProps<Theme> {}

export const TouchableOpacityBox = createRestyleComponent<TouchableOpacityBoxProps, Theme>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);
