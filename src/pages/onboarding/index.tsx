import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PersonalizedWorkout from './PersonalizedWorkout';
import CommunityMotivation from './CommunityMotivation';
import TrackFitness from './TrackFitness';
import {GetStarted} from './GetStarted';
import Gender from './personalized_model';
const Stack = createNativeStackNavigator();
const Onboarding = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PersonalizedWorkout"
        options={{headerShown: false}}
        component={PersonalizedWorkout}
      />
      <Stack.Screen
        name="CommunityMotivation"
        options={{headerShown: false}}
        component={CommunityMotivation}
      />
      <Stack.Screen
        name="TrackFitness"
        options={{headerShown: false}}
        component={TrackFitness}
      />
      <Stack.Screen
        name="GetStarted"
        options={{headerShown: false}}
        component={GetStarted}
      />
      <Stack.Screen
        name="Gender"
        options={{headerShown: false}}
        component={Gender}
      />
    </Stack.Navigator>
  );
};

export default Onboarding;
