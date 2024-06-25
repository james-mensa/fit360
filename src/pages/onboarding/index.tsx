import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PersonalizedWorkout from './PersonalizedWorkout';
import CommunityMotivation from './CommunityMotivation';
import TrackFitness from './TrackFitness';
import {GetStarted} from './GetStarted';
import Gender, {
  BodyType,
  Interest,
  SleepTime,
  TargetBodyType,
  TargetBodyZones,
  WorkOutPerWeek,
} from './personalized_model';
import {FitnessLevel} from './personalized_model/FitnessLevel';
import {WorkingHour} from './personalized_model/WorkHours';
import {WalkingTime} from './personalized_model/WalkingTime';
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
      <Stack.Screen
        name="TargetBodyType"
        options={{headerShown: false}}
        component={TargetBodyType}
      />
      <Stack.Screen
        name="BodyTargetZones"
        options={{headerShown: false}}
        component={TargetBodyZones}
      />
      <Stack.Screen
        name="WorkOutPerWeek"
        options={{headerShown: false}}
        component={WorkOutPerWeek}
      />
      <Stack.Screen
        name="FitnessLevel"
        options={{headerShown: false}}
        component={FitnessLevel}
      />
      <Stack.Screen
        name="WorkingHour"
        options={{headerShown: false}}
        component={WorkingHour}
      />
      <Stack.Screen
        name="WalkingTime"
        options={{headerShown: false}}
        component={WalkingTime}
      />
      <Stack.Screen
        name="SleepTime"
        options={{headerShown: false}}
        component={SleepTime}
      />
    </Stack.Navigator>
  );
};

export default Onboarding;
