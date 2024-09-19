import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
interface avaterProps {
  icon?: React.ReactNode;
  bg?: string;
  onPress?: () => void;
}
export const Avater: React.FC<avaterProps> = ({icon, bg, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{...styles.container, backgroundColor: bg}}>{icon}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
  },
});
