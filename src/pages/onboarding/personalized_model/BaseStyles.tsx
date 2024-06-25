import {UIResponsive} from '@layout/ResponsiveUi';
import {StyleSheet} from 'react-native';

export const BaseStyles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingVertical: 15,
    paddingHorizontal: 20,
    minHeight: UIResponsive.Body.height / 1.3,
    gap: 10,
  },
  stackRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  stackColumn: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
