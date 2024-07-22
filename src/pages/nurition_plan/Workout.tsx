import {DayPlan} from '@models/cards';
import {StyleSheet, View} from 'react-native';

export const Workout = () => {
  return (
    <View style={styles.container}>
      <DayPlan />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});
