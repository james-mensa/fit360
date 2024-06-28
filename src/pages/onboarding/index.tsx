import * as React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import PersonalizedWorkout from './PersonalizedWorkout';
import CommunityMotivation from './CommunityMotivation';
import TrackFitness from './TrackFitness';
import {GetStarted} from './GetStarted';
import Gender, {
  BadHabits,
  BodyType,
  CreatingPersonalizedModel,
  Interest,
  SleepTime,
  TargetBodyType,
  TargetBodyZones,
  TermsAgreeMent,
  WaterConsumption,
  WorkOutPerWeek,
} from './personalized_model';
import {FitnessLevel} from './personalized_model/FitnessLevel';
import {WorkingHour} from './personalized_model/WorkHours';
import {WalkingTime} from './personalized_model/WalkingTime';
const Stack = createStackNavigator();
const navigateWithNoAnimation = {
  cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
  headerShown: false,
};
const navigateHorizontal = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
};
const Onboarding = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PersonalizedWorkout"
        options={navigateHorizontal}
        component={PersonalizedWorkout}
      />
      <Stack.Screen
        name="CommunityMotivation"
        options={navigateHorizontal}
        component={CommunityMotivation}
      />
      <Stack.Screen
        name="TrackFitness"
        options={navigateHorizontal}
        component={TrackFitness}
      />
      <Stack.Screen
        name="GetStarted"
        options={navigateHorizontal}
        component={GetStarted}
      />
      <Stack.Screen
        name="Gender"
        options={navigateWithNoAnimation}
        component={Gender}
      />
      <Stack.Screen
        name="Interest"
        options={navigateWithNoAnimation}
        component={Interest}
      />
      <Stack.Screen
        name="BodyType"
        options={navigateWithNoAnimation}
        component={BodyType}
      />
      <Stack.Screen
        name="TargetBodyType"
        options={navigateWithNoAnimation}
        component={TargetBodyType}
      />
      <Stack.Screen
        name="BodyTargetZones"
        options={navigateWithNoAnimation}
        component={TargetBodyZones}
      />
      <Stack.Screen
        name="WorkOutPerWeek"
        options={navigateWithNoAnimation}
        component={WorkOutPerWeek}
      />
      <Stack.Screen
        name="FitnessLevel"
        options={navigateWithNoAnimation}
        component={FitnessLevel}
      />
      <Stack.Screen
        name="WorkingHour"
        options={navigateWithNoAnimation}
        component={WorkingHour}
      />
      <Stack.Screen
        name="WalkingTime"
        options={navigateWithNoAnimation}
        component={WalkingTime}
      />
      <Stack.Screen
        name="SleepTime"
        options={navigateWithNoAnimation}
        component={SleepTime}
      />
      <Stack.Screen
        name="WaterConsumption"
        options={navigateWithNoAnimation}
        component={WaterConsumption}
      />
      <Stack.Screen
        name="BadHabits"
        options={navigateWithNoAnimation}
        component={BadHabits}
      />
      <Stack.Screen
        name="TermsAgreeMent"
        options={navigateWithNoAnimation}
        component={TermsAgreeMent}
      />
      <Stack.Screen
        name="CreatingPersonalizedModel"
        options={navigateWithNoAnimation}
        component={CreatingPersonalizedModel}
      />
    </Stack.Navigator>
  );
};

export default Onboarding;
