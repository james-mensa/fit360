import React from 'react';
import {UIResponsive} from '@layout/ResponsiveUi';
import {Palette} from '@styles/BaseColor';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeBase from 'react-native-vector-icons/FontAwesome';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native';

export const VectorIcons = {
  heart: (
    <FontAwesome
      name={'heartbeat'}
      size={UIResponsive.Card.icon}
      color={Palette.background.light[500]}
    />
  ),
  weight: (
    <FontAwesome
      name={'weight-hanging'}
      size={UIResponsive.Card.icon}
      color={Palette.background.light[500]}
    />
  ),
  sleep: (
    <MaterialCommunityIcons
      name={'bell-sleep'}
      size={UIResponsive.Card.icon}
      color={Palette.background.light[500]}
    />
  ),
  backArrow: (
    <MaterialIcons
      name={'arrow-back-ios-new'}
      size={UIResponsive.Card.icon}
      color={Palette.background.light[300]}
    />
  ),
  CheckedLight: (
    <FontAwesome
      name={'check'}
      size={15}
      color={Palette.background.light[100]}
    />
  ),
  Checked: ({
    size,
    color,
    onPress,
  }: {
    size: number;
    color?: string;
    onPress?: () => void;
  }) => (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome
        name={'check'}
        size={size ?? 15}
        color={color ?? Palette.background.light[500]}
      />
    </TouchableOpacity>
  ),
  Minus: ({color, onPress}: {color?: string; onPress?: () => void}) => (
    <TouchableOpacity onPress={onPress}>
      <FeatherIcons
        name={'minus'}
        size={15}
        color={color ?? Palette.background.light[500]}
      />
    </TouchableOpacity>
  ),
  Plus: ({color, onPress}: {color?: string; onPress?: () => void}) => (
    <TouchableOpacity onPress={onPress}>
      <FeatherIcons
        name={'plus'}
        size={15}
        color={color ?? Palette.background.light[500]}
      />
    </TouchableOpacity>
  ),
  Upload: (
    <FeatherIcons
      name="upload-cloud"
      size={30}
      color={Palette.background.light[500]}
    />
  ),

  Close: ({
    size,
    color,
    onPress,
  }: {
    size?: number;
    color?: string;
    onPress?: () => void;
  }) => (
    <TouchableOpacity onPress={onPress}>
      <Ionicons
        name={'close'}
        size={size ?? 20}
        color={color ?? Palette.background.light[550]}
      />
    </TouchableOpacity>
  ),
  previous: ({
    size,
    color,
    onPress,
  }: {
    size?: number;
    color?: string;
    onPress?: () => void;
  }) => (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons
        name={'skip-previous'}
        size={size ?? 20}
        color={color ?? Palette.background.light[500]}
      />
    </TouchableOpacity>
  ),
  next: ({
    size,
    color,
    onPress,
  }: {
    size?: number;
    color?: string;
    onPress?: () => void;
  }) => (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons
        name={'skip-next'}
        size={size ?? 20}
        color={color ?? Palette.background.light[500]}
      />
    </TouchableOpacity>
  ),
  Dumbell: (
    <MaterialCommunityIcons
      name={'dumbbell'}
      size={UIResponsive.Card.icon}
      color={Palette.background.light[500]}
    />
  ),
  secondaryPrevButton: (color: string) => {
    return <FeatherIcons name={'arrow-left'} size={15} color={color} />;
  },
  secondaryNextButton: (color: string) => {
    return <FeatherIcons name={'arrow-right'} size={15} color={color} />;
  },
  fire: (
    <FontAwesome
      name={'fire'}
      size={UIResponsive.Card.icon}
      color={Palette.background.light[500]}
    />
  ),

  mark: ({size, color}: {size?: number; color?: string}) => {
    return (
      <MaterialCommunityIcons
        name={'checkbox-marked-circle-outline'}
        size={size ?? 17}
        color={color ?? Palette.background.light[500]}
      />
    );
  },
  user: (
    <FontAwesome
      name={'user'}
      size={UIResponsive.Card.icon}
      color={Palette.background.dark[500]}
    />
  ),
  gender: (
    <MaterialCommunityIcons
      name={'gender-male-female'}
      size={UIResponsive.Card.icon}
      color={Palette.background.dark[500]}
    />
  ),
  circleDot: (
    <FontAwesomeBase
      name={'dot-circle-o'}
      size={13}
      color={Palette.background.dark[500]}
    />
  ),
  plan: (
    <MaterialIcons
      name={'next-plan'}
      size={15}
      color={Palette.background.dark[500]}
    />
  ),
} as const;
export type VectorIcons = (typeof VectorIcons)[keyof typeof VectorIcons];
