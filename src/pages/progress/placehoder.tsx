import React from 'react';
import {Label, LabelVariant} from '@models/label';
import {StyleSheet, View} from 'react-native';
import {Palette} from '@styles/BaseColor';
export const AnalysisLabel = ({title}: {title: string}) => {
  return (
    <View style={styles.constainer}>
      <Label variant={LabelVariant.Sub4.Bold} title={title} />
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: Palette.background.light[200],
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderTopRightRadius: 1,
    width: '100%',
  },
});
