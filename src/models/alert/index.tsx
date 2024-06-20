import {Label, LabelVarient} from '@models/label';
import {Pallete} from '@styles/BaseColor';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Status = ({title, bg}: {title: string; bg?: string}) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: bg ?? Pallete.background.light[150],
      }}>
      <Label title={title} varient={LabelVarient.Sub4.Roboto} />
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
