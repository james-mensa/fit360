import {DayPlan} from '@models/cards';

import {useProvider} from '@store/provider';
import React from 'react';
import {StyleSheet, View} from 'react-native';
export const Workout = () => {
  const {plan} = useProvider();
  return (
    <View style={styles.container}>
      {plan.map((item, index) => (
        <DayPlan
          index={index}
          key={index}
          item={item}
          title={item.title}
          count={item.playlist.length}
          type={item.playlist[0].type ?? ''}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 15,
    paddingTop: 30,
  },
});
