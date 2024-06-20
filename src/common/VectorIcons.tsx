import React from 'react';
import {UIResponsive} from '@layout/ResponsiveUi';
import {Pallete} from '@styles/BaseColor';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const VectorIcons = {
  heart: (
    <FontAwesome
      name={'heartbeat'}
      size={UIResponsive.Card.icon}
      color={Pallete.background.light[500]}
    />
  ),
  weight: (
    <FontAwesome
      name={'weight-hanging'}
      size={UIResponsive.Card.icon}
      color={Pallete.background.light[500]}
    />
  ),
  sleep: (
    <MaterialCommunityIcons
      name={'bell-sleep'}
      size={UIResponsive.Card.icon}
      color={Pallete.background.light[500]}
    />
  ),
  backArrow: (
    <MaterialIcons
      name={'arrow-back-ios-new'}
      size={UIResponsive.Card.icon}
      color={Pallete.background.light[300]}
    />
  ),
} as const;
export type VectorIcons = (typeof VectorIcons)[keyof typeof VectorIcons];
