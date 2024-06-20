export const FONTS = {
  TBold: 'TTInterfaces-Bold',
  ExtraBold: 'RobotoCondensed-ExtraBold',
  TExtraLight: 'TTInterfaces-ExtraLight',
  TLight: 'TTInterfaces-Light',
  TMedium: 'TTInterfaces-Medium',
  TRegular: 'TTInterfaces-Regular',
  TThin: 'TTInterfaces-Thin',
  RBold: 'RobotoCondensed-Bold',
  Rregular: 'RobotoCondensed-Regular',
  RMedium: 'RobotoCondensed-Medium',
} as const;

export type FONTS = (typeof FONTS)[keyof typeof FONTS];
