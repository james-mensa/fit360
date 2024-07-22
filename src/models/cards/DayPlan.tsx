import {UIResponsive} from '@layout/ResponsiveUi';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const DayPlan = () => {
  return (
    <View style={styles.container}>
      <View></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    ...UIResponsive.Card.medium,
    backgroundColor: 'red',
    borderRadius: 20,
    marginVertical: 20,
  },
});
