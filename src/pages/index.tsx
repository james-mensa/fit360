import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitializationStage from './fit-plan';
import {BaseTab} from '@models/bottomTab';

const Stack = createNativeStackNavigator();

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
