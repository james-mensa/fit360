import {FONTS} from '@common/fonts';
import {Palette} from '@styles/BaseColor';
import React from 'react';
import {Text} from 'react-native';
type fontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 'ultralight'
  | 'thin'
  | 'light'
  | 'medium'
  | undefined;
interface labelProps {
  title?: string | number;
  variant: labelTheme;
  color?: string;
  align?: 'center' | 'left' | 'right';
  fullWidth?: boolean;
}
/**
 * Label component to display text with specified styles.
 *
 * @param {LabelProps} props - The properties for the Label component.
 * @returns {JSX.Element} - The rendered Label component.
 */
export const Label: React.FC<labelProps> = ({
  title,
  variant,
  color,
  align = 'left',
  fullWidth = false,
}) => {
  return (
    <Text
      style={{
        color: color ?? variant.color,
        fontFamily: variant.fontFamily,
        fontSize: variant.fontSize,
        fontWeight: variant.fontWeight,
        textAlign: align,
        width: fullWidth ? '100%' : undefined,
      }}>
      {title}
    </Text>
  );
};

interface labelTheme {
  color: string;
  fontFamily: string;
  fontSize: number;
  fontWeight?: fontWeight;
}
export const LabelVariant = {
  H1: {
    TInterface: {
      color: Palette.text.dark[200],
      fontFamily: FONTS.TRegular,
      fontSize: 50,
    },
    Roboto: {
      color: Palette.text.dark[200],
      fontFamily: FONTS.Rregular,
      fontSize: 50,
    },
  },
  H1_Bold: {
    TInterface: {
      color: Palette.text.dark[200],
      fontFamily: FONTS.TBold,
      fontSize: 50,
    },
    Roboto: {
      color: Palette.text.dark[200],
      fontFamily: FONTS.RBold,
      fontSize: 50,
    },
  },
  H1_Bold_Large: {
    TInterface: {
      color: Palette.text.dark[200],
      fontFamily: FONTS.TBold,
      fontSize: 60,
    },
  },
  H2: {
    TInterface: {
      color: Palette.text.dark[200],
      fontFamily: FONTS.TRegular,
      fontSize: 30,
    },
    Roboto: {
      color: Palette.text.dark[200],
      fontFamily: FONTS.Rregular,
      fontSize: 30,
      fontWeight: '700',
    },
  },
  H2_Bold: {
    TInterface: {
      color: Palette.text.dark[200],
      fontFamily: FONTS.TBold,
      fontSize: 30,
    },
    Roboto: {
      color: Palette.text.dark[200],
      fontFamily: FONTS.RBold,
      fontSize: 30,
      fontWeight: '700',
    },
  },
  H3: {
    TInterface: {
      color: Palette.text.dark[200],
      fontFamily: FONTS.TRegular,
      fontSize: 20,
    },
    Roboto: {
      color: Palette.text.dark[200],
      fontFamily: FONTS.Rregular,
      fontSize: 20,
    },
  },
  H3_Bold: {
    large: {
      TInterface: {
        color: Palette.text.dark[100],
        fontFamily: FONTS.TBold,
        fontSize: 20,
      },
      Roboto: {
        color: Palette.text.dark[100],
        fontFamily: FONTS.Rregular,
        fontSize: 20,
      },
    },
    small: {
      TInterface: {
        color: Palette.text.dark[100],
        fontFamily: FONTS.TBold,
        fontSize: 16,
      },
      Roboto: {
        color: Palette.text.dark[100],
        fontFamily: FONTS.RBold,
        fontSize: 16,
      },
      extra: {
        color: Palette.text.dark[100],
        fontFamily: FONTS.ExtraBold,
        fontSize: 15,
        fontWeight: 700,
      },
    },
    extra: {
      color: Palette.text.dark[100],
      fontFamily: FONTS.ExtraBold,
      fontSize: 20,
    },
  },
  Sub1: {
    TInterface: {
      color: Palette.text.dark[200],
      fontFamily: FONTS.TRegular,
      fontSize: 15,
    },
    Roboto: {
      color: Palette.text.dark[200],
      fontFamily: FONTS.Rregular,
      fontSize: 15,
    },
    Extra: {
      color: Palette.text.dark[200],
      fontFamily: FONTS.ExtraBold,
      fontSize: 15,
      fontWeight: 700,
    },
  },
  Sub2: {
    TInterface: {
      color: Palette.text.dark[200],
      fontFamily: FONTS.TMedium,
      fontSize: 15,
    },
    Roboto: {
      color: Palette.text.dark[200],
      fontFamily: FONTS.RMedium,
      fontSize: 15,
    },
  },
  Sub3: {
    TInterface: {
      color: Palette.text.dark[200],
      fontFamily: FONTS.TMedium,
      fontSize: 12,
    },
    Roboto: {
      color: Palette.text.dark[200],
      fontFamily: FONTS.RMedium,
      fontSize: 12,
    },
  },
  Sub4: {
    TInterface: {
      color: Palette.text.dark[200],
      fontFamily: FONTS.TMedium,
      fontSize: 10,
    },
    Roboto: {
      color: Palette.text.dark[200],
      fontFamily: FONTS.RMedium,
      fontSize: 10,
    },
  },
} as const;

export type LabelVariant = (typeof LabelVariant)[keyof typeof LabelVariant];
