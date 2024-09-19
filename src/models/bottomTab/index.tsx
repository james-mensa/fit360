import React from 'react';
import Home from '@pages/home';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import ProfilePage from '@pages/profile';
import Plan from '@pages/nurition_plan';
import {StyleSheet} from 'react-native';
import {isLargeDevice, UIResponsive} from '@layout/ResponsiveUi';
import {Palette} from '@styles/BaseColor';
import {Progress} from '@pages/progress';
const Tab = createBottomTabNavigator();

export function BaseTab() {
  return (
    <Tab.Navigator
      sceneContainerStyle={styles.container}
      screenOptions={{
        tabBarStyle: styles.tabbar,
      }}>
      <Tab.Screen
        name="HomePage"
        component={Home}
        options={tabsOption('HomePage')}
      />
      <Tab.Screen
        name="PlanPage"
        component={Plan}
        options={tabsOption('PlanPage')}
      />
      <Tab.Screen
        name="ProgressPage"
        component={Progress}
        options={tabsOption('ProgressPage')}
      />
      <Tab.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={tabsOption('ProfilePage')}
      />
    </Tab.Navigator>
  );
}
const tabsOption = (page: string): BottomTabNavigationOptions => {
  return {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarIconStyle: {
      backgroundColor: 'blue',
    },
    tabBarIcon: ({focused}) => {
      const tabColor = focused
        ? Palette.text.light[100]
        : Palette.text.dark[500];
      const tabSize = focused
        ? UIResponsive.Tab.active
        : UIResponsive.Tab.inactive;
      switch (page) {
        case 'HomePage':
          return <Feather name={'home'} size={tabSize} color={tabColor} />;
        case 'PlanPage':
          return (
            <FontAwesome name={'dumbbell'} size={tabSize} color={tabColor} />
          );
        case 'ProgressPage':
          return <Octicons name={'graph'} size={tabSize} color={tabColor} />;
        case 'ProfilePage':
          return <FontAwesome name={'user'} size={tabSize} color={tabColor} />;
      }
    },
  };
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Palette.background.dark[100],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabbar: {
    position: 'absolute',
    bottom: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Palette.ColorsFromImage.muscle_1,
    marginHorizontal: isLargeDevice ? 200 : 50,
    borderRadius: 25,
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    shadowOpacity: 0.9,
  },
});
