import {TextStyle} from 'react-native';

import {createText} from '@shopify/restyle';

import {Theme} from '@theme';

const SRText = createText<Theme>();
interface SRTextProps extends React.ComponentProps<typeof SRText> {}

export interface TextProps
  extends Omit<
    SRTextProps,
    'fontWeight' | 'fontSize' | 'fontFamily' | 'lineHeight'
  > {
  preset?: TextVariants;
  bold?: boolean;
  semiBold?: boolean;
  italic?: boolean;
}

export function Text({
  children,
  preset = 'paragraphMedium',
  bold,
  semiBold,
  italic,
  ...srTextProps
}: TextProps) {
  const fontFamily = getFontFamily(preset, bold, semiBold, italic);
  return (
    <SRText
      color="backgroundContrast"
      style={[$fontSizes[preset], {fontFamily}]}
      {...srTextProps}>
      {children}
    </SRText>
  );
}

function getFontFamily(
  preset: TextVariants,
  bold?: boolean,
  semiBold?: boolean,
  italic?: boolean,
) {
  if (
    preset === 'headingLarge' ||
    preset === 'headingMedium' ||
    preset === 'headingSmall'
  ) {
    return italic ? $fontFamilies.blackItalic : $fontFamilies.black;
  }
  switch (true) {
    case bold && italic:
      return $fontFamilies.boldItalic;
    case bold:
      return $fontFamilies.bold;
    case semiBold && italic:
      return $fontFamilies.mediumItalic;
    case semiBold:
      return $fontFamilies.medium;
    case italic:
      return $fontFamilies.italic;
    default:
      return $fontFamilies.regular;
  }
}

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},
  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},
  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

export const $fontFamilies = {
  black: 'Satoshi-Black',
  blackItalic: 'Satoshi-BlackItalic',
  bold: 'Satoshi-Bold',
  boldItalic: 'Satoshi-BoldItalic',
  medium: 'Satoshi-Medium',
  mediumItalic: 'Satoshi-Medium',
  italic: 'Satoshi-Italic',
  regular: 'Satoshi-Regular',
  light: 'Satoshi-Light',
};
