import {Palette} from '@styles/BaseColor';
import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

export const VideoProgressIndicator = ({
  progress = 100,
  active,
}: {
  progress?: number;
  active?: boolean;
}) => {
  const percentage = {
    width: active ? `${progress}%` : '100%',
  };
  return (
    <View style={styles.container}>
      <View style={{...styles.indicator, ...(percentage as ViewProps)}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 15,
    height: 2,
    backgroundColor: Palette.background.light[550],
    borderRadius: 20,
    overflow: 'hidden',
  },
  indicator: {
    height: 2,
    backgroundColor: Palette.background.light[300],
  },
});
