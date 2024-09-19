import {Palette} from '@styles/BaseColor';
import {Platform} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const AppStyles = {
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: Palette.background.light[500],
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 50,
        shadowColor: Palette.background.light[500],
      },
    }),
  },
};
const useAppNavigation = () => {
  return useNavigation<NavigationProp<ParamListBase>>();
};
export {AppStyles, useAppNavigation};
