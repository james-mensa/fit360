import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PersonalizedWorkout from './PersonalizedWorkout';
import CommunityMotivation from './CommunityMotivation';
import TrackFitness from './TrackFitness';
import {GetStarted} from './GetStarted';
import Gender, {Interest} from './personalized_model';
import {BodyType} from './personalized_model/BodyType';
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
      <Stack.Screen
        name="Interest"
        options={{headerShown: false}}
        component={Interest}
      />
      <Stack.Screen
        name="BodyType"
        options={{headerShown: false}}
        component={BodyType}
      />
    </Stack.Navigator>
  );
};

export default Onboarding;
