import React from 'react';
import Home from '@pages/home';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Settings from '@pages/settings';
import Plan from '@pages/nurition_plan';
import Progress from '@pages/progress';
import {StyleSheet} from 'react-native';
import {UIResponsive} from '@layout/ResponsiveUi';
import {Palette} from '@styles/BaseColor';
const Tab = createBottomTabNavigator();

export function BaseTab() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
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
        name="SettingsPage"
        component={Settings}
        options={tabsOption('SettingsPage')}
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
      switch (page) {
        case 'HomePage':
          return (
            <Feather
              name={'home'}
              size={
                focused ? UIResponsive.Tab.active : UIResponsive.Tab.inactive
              }
              color={focused ? Palette.text.dark[100] : Palette.text.dark[300]}
            />
          );
        case 'PlanPage':
          return (
            <FontAwesome
              name={'dumbbell'}
              size={
                focused ? UIResponsive.Tab.active : UIResponsive.Tab.inactive
              }
              color={focused ? Palette.text.dark[100] : Palette.text.dark[300]}
            />
          );
        case 'ProgressPage':
          return (
            <Octicons
              name={'graph'}
              size={
                focused ? UIResponsive.Tab.active : UIResponsive.Tab.inactive
              }
              color={focused ? Palette.text.dark[100] : Palette.text.dark[300]}
            />
          );
        case 'SettingsPage':
          return (
            <Ionicons
              name={'settings'}
              size={
                focused ? UIResponsive.Tab.active : UIResponsive.Tab.inactive
              }
              color={focused ? Palette.text.dark[100] : Palette.text.dark[300]}
            />
          );
      }
    },
  };
};
const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255,0.7)',
    marginHorizontal: 30,
    borderRadius: 25,
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    shadowOpacity: 0.9,
  },
});
