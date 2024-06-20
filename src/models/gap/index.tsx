import React from 'react';
import {View} from 'react-native';

export const GapHorizontal = ({w = 10}: {w?: number}) => {
  return <View style={{width: w}}></View>;
};

export const GapVertical = ({h = 10}: {h?: number}) => {
  return <View style={{height: h}}></View>;
};
