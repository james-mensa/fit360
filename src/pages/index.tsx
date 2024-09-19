import React, {useEffect, useState} from 'react';
import {BaseTab} from '@models/bottomTab';
import {createStackNavigator} from '@react-navigation/stack';

import {Player__} from '@models/player';
import {useProvider} from '@store/provider';
import Onboarding from './onboarding';

const Stack = createStackNavigator();

const UIScreens = () => {
  const {refreshUser, isLogin} = useProvider();
  useEffect(() => {
    refreshUser();
  }, []);
  if (isLogin === null) {
    return null;
  }
  return (
    <Stack.Navigator initialRouteName={isLogin ? 'PageBase' : 'onboarding'}>
      <Stack.Screen
        name="onboarding"
        options={{headerShown: false}}
        component={Onboarding}
      />
      <Stack.Screen
        name="PageBase"
        options={{headerShown: false}}
        component={BaseTab}
      />
      <Stack.Screen
        name="Player"
        options={{
          headerShown: false,
          presentation: 'transparentModal',
        }}
        component={Player__}
      />
    </Stack.Navigator>
  );
};

export default UIScreens;
