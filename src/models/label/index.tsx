import {FONTS} from '@common/fonts';
import {Pallete} from '@styles/BaseColor';
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
  title: string | number;
  varient: labelTheme;
  color?: string;
}
export const Label: React.FC<labelProps> = ({title, varient, color}) => {
  return (
    <Text
      style={{
        color: color ?? varient.color,
        fontFamily: varient.fontFamily,
        fontSize: varient.fontSize,
        fontWeight: varient.fontWeight,
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
export const LabelVarient = {
  H1: {
    TInterface: {
      color: Pallete.text.dark[200],
      fontFamily: FONTS.TRegular,
      fontSize: 50,
    },
    Roboto: {
      color: Pallete.text.dark[200],
      fontFamily: FONTS.Rregular,
      fontSize: 50,
    },
  },
  H1_Bold: {
    TInterface: {
      color: Pallete.text.dark[200],
      fontFamily: FONTS.TBold,
      fontSize: 50,
    },
    Roboto: {
      color: Pallete.text.dark[200],
      fontFamily: FONTS.RBold,
      fontSize: 50,
    },
  },
  H1_Bold_Large: {
    TInterface: {
      color: Pallete.text.dark[200],
      fontFamily: FONTS.TBold,
      fontSize: 60,
    },
  },
  H2: {
    TInterface: {
      color: Pallete.text.dark[200],
      fontFamily: FONTS.TRegular,
      fontSize: 30,
    },
    Roboto: {
      color: Pallete.text.dark[200],
      fontFamily: FONTS.Rregular,
      fontSize: 30,
      fontWeight: '700',
    },
  },
  H2_Bold: {
    TInterface: {
      color: Pallete.text.dark[200],
      fontFamily: FONTS.TBold,
      fontSize: 30,
    },
    Roboto: {
      color: Pallete.text.dark[200],
      fontFamily: FONTS.RBold,
      fontSize: 30,
      fontWeight: '700',
    },
  },
  H3: {
    TInterface: {
      color: Pallete.text.dark[200],
      fontFamily: FONTS.TRegular,
      fontSize: 20,
    },
    Roboto: {
      color: Pallete.text.dark[200],
      fontFamily: FONTS.Rregular,
      fontSize: 20,
    },
  },
  H3_Bold: {
    large: {
      TInterface: {
        color: Pallete.text.dark[100],
        fontFamily: FONTS.TBold,
        fontSize: 20,
      },
      Roboto: {
        color: Pallete.text.dark[100],
        fontFamily: FONTS.Rregular,
        fontSize: 20,
      },
    },
    small: {
      TInterface: {
        color: Pallete.text.dark[100],
        fontFamily: FONTS.TBold,
        fontSize: 16,
      },
      Roboto: {
        color: Pallete.text.dark[100],
        fontFamily: FONTS.RBold,
        fontSize: 16,
      },
      extra: {
        color: Pallete.text.dark[100],
        fontFamily: FONTS.ExtraBold,
        fontSize: 15,
        fontWeight: 700,
      },
    },
    extra: {
      color: Pallete.text.dark[100],
      fontFamily: FONTS.ExtraBold,
      fontSize: 20,
    },
  },
  Sub1: {
    TInterface: {
      color: Pallete.text.dark[200],
      fontFamily: FONTS.TRegular,
      fontSize: 15,
    },
    Roboto: {
      color: Pallete.text.dark[200],
      fontFamily: FONTS.Rregular,
      fontSize: 15,
    },
    Extra: {
      color: Pallete.text.dark[200],
      fontFamily: FONTS.ExtraBold,
      fontSize: 15,
    },
  },
  Sub2: {
    TInterface: {
      color: Pallete.text.dark[200],
      fontFamily: FONTS.TMedium,
      fontSize: 15,
    },
    Roboto: {
      color: Pallete.text.dark[200],
      fontFamily: FONTS.RMedium,
      fontSize: 15,
    },
  },
  Sub3: {
    TInterface: {
      color: Pallete.text.dark[200],
      fontFamily: FONTS.TMedium,
      fontSize: 12,
    },
    Roboto: {
      color: Pallete.text.dark[200],
      fontFamily: FONTS.RMedium,
      fontSize: 12,
    },
  },
  Sub4: {
    TInterface: {
      color: Pallete.text.dark[200],
      fontFamily: FONTS.TMedium,
      fontSize: 10,
    },
    Roboto: {
      color: Pallete.text.dark[200],
      fontFamily: FONTS.RMedium,
      fontSize: 10,
    },
  },
} as const;

export type LabelVarient = (typeof LabelVarient)[keyof typeof LabelVarient];
