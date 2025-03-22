import { Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native';

interface TextProps extends RNTextProps {
  variant?: TextVariants;
  bold?: boolean;
  semiBold?: boolean;
  italic?: boolean;
  style?: Omit<TextStyle, 'fontSize' | 'lineHeight' | 'fontFamily' | 'fontWeight' | 'fontStyle'>;
}

export function Text({
  children,
  variant = 'paragraphMedium',
  bold,
  semiBold,
  italic,
  style,
  ...rest
}: TextProps) {
  const fontFamily = getFontFamily(variant, bold, semiBold, italic);
  return (
    <RNText
      style={[$fontSizes[variant], {fontFamily}, style]}
      {...rest}
    >
      {children}
    </RNText>
  );
}

function getFontFamily(
  variant: TextVariants,
  bold?: boolean,
  semiBold?: boolean,
  italic?: boolean
) {
  if (variant === 'headingLarge' || variant === 'headingMedium' || variant === 'headingSmall') {
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

const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: { fontSize: 32, lineHeight: 38.4 },
  headingMedium: { fontSize: 22, lineHeight: 26.4 },
  headingSmall: { fontSize: 18, lineHeight: 23.4 },
  paragraphLarge: { fontSize: 18, lineHeight: 25.2 },
  paragraphMedium: { fontSize: 16, lineHeight: 22.4 },
  paragraphSmall: { fontSize: 14, lineHeight: 19.6 },
  paragraphCaption: { fontSize: 12, lineHeight: 16.8 },
  paragraphCaptionSmall: { fontSize: 10, lineHeight: 14 },
};

const $fontFamilies = {
  'black': 'Satoshi-Black',
  'blackItalic': 'Satoshi-BlackItalic',
  'bold': 'Satoshi-Bold',
  'boldItalic': 'Satoshi-BoldItalic',
  'medium': 'Satoshi-Medium',
  'mediumItalic': 'Satoshi-Medium',
  'italic': 'Satoshi-Italic',
  'regular': 'Satoshi-Regular',
  'light': 'Satoshi-Light',
};
