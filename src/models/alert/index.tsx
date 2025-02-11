import {Label, LabelVariant} from '@models/label';
import {Palette} from '@styles/BaseColor';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Status = ({title, bg}: {title: string; bg?: string}) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: bg ?? Palette.background.light[150],
      }}>
      <Label title={title} variant={LabelVariant.Sub4.Roboto} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    height: 25,
    paddingVertical: 1,
    paddingHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
