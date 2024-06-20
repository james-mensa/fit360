import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Tab = {
  active: 28,
  inactive: 20,
};
const TopNav = {
  height: 50,
};
const Body = {
  width: windowWidth,
  height: windowHeight - TopNav.height,
};

const FullScreen = {
  width: windowWidth,
  height: windowHeight,
};
const Card = {
  primary: {
    width: windowWidth - 50,
  },

  status: {
    width: windowWidth * (1 / 3),
    height: 130,
  },
  icon: 20,
};

const Radius = {
  bodyTop: 30,
};
const Icons = {
  medium: 20,
  small: 15,
  normal: 25,
  large: 30,
};
export const UIResponsive = {
  Tab,
  TopNav,
  Body,
  Radius,
  Icons,
  Card,
  FullScreen,
};
