import {Palette} from '@styles/BaseColor';
import {StyleSheet, View} from 'react-native';

interface props {
  width?: number;
  color?: string;
}
export const VerticalDivider: React.FC<props> = ({width, color}) => {
  return (
    <View
      style={{
        ...styles.container,
        width: width ?? 200,
        height: 1,
        backgroundColor: color ?? Palette.background.light[500],
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});
