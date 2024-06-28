import * as React from 'react';

import InitializationStage from './fit-plan';
import {BaseTab} from '@models/bottomTab';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const UIScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="onboarding"
        options={{headerShown: false}}
        component={InitializationStage}
      />
      <Stack.Screen
        name="PageBase"
        options={{headerShown: false}}
        component={BaseTab}
      />
    </Stack.Navigator>
  );
};

export default UIScreens;
