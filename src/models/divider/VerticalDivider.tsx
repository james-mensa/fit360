import {Palette} from '@styles/BaseColor';
import {StyleSheet, View} from 'react-native';

export const VerticalDivider: React.FC = () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 1,
    backgroundColor: Palette.background.dark[200],
  },
});
