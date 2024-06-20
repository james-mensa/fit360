import React from 'react';
import {ScrollView, StyleSheet, ViewStyle} from 'react-native';

interface ScrollViewHorizontalProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const ScrollViewHorizontal: React.FC<ScrollViewHorizontalProps> = ({
  children,
  style,
}) => {
  return (
    <ScrollView
      style={[styles.horizontalScrollContainer, style]}
      horizontal
      showsHorizontalScrollIndicator={false}
      directionalLockEnabled={true}
      alwaysBounceVertical={false}>
      {children}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  horizontalScrollContainer: {
    gap: 10,
    flexDirection: 'row',
  },
});
