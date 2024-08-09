import {Palette} from '@styles/BaseColor';
import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

export const VideoProgressIndicator = ({
  progress = 100,
  active = false,
  completed = false,
  isPlaying = false,
}: {
  progress?: number;
  active?: boolean;
  completed: boolean;
  isPlaying: boolean;
}) => {
  const percentage = {
    width: active ? `${progress}%` : '100%',
  };
  const styles = useStyles(completed, active, isPlaying);
  return (
    <View style={styles.container}>
      <View style={{...styles.indicator, ...(percentage as ViewProps)}} />
    </View>
  );
};

const useStyles = (completed: boolean, active: boolean, isPlaying: boolean) =>
  StyleSheet.create({
    container: {
      width: active ? 25 : 15,
      height: active ? 3 : 2,
      backgroundColor: isPlaying
        ? Palette.background.light[550]
        : completed && active
        ? Palette.background.light[500]
        : Palette.background.light[550],
      borderRadius: 1,
      overflow: 'hidden',
    },
    indicator: {
      height: active ? 3 : 2,
      backgroundColor: completed
        ? active
          ? Palette.background.dark[400]
          : Palette.background.light[500]
        : Palette.background.light[500],
    },
  });
