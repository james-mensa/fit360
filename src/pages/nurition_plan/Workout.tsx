import {DayPlan} from '@models/cards';
import {useFocusEffect} from '@react-navigation/native';

import {useProvider} from '@store/provider';
import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
export const Workout = () => {
  const {plan} = useProvider();
  const [_, setRefresh] = React.useState(false);

  useFocusEffect(
    useCallback(() => {
      setRefresh(prev => !prev);
    }, []),
  );

  return (
    <View style={styles.container}>
      {plan.map((item, index) => (
        <DayPlan
          index={index}
          key={index}
          item={item}
          title={item.title}
          count={item.playlist.length}
          completed={
            item.playlist.filter(data => data.completed === true).length
          }
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
