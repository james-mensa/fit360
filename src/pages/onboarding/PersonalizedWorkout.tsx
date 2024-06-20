import React from 'react';
import {OnBoardingUI} from '@models/onboarding';
import {onBoardingSteps} from './common';
const PersonalizedWorkout = () => {
  return (
    <OnBoardingUI
      data={onBoardingSteps[0]}
      nextPage="CommunityMotivation"
      step={0}
    />
  );
};
export default PersonalizedWorkout;
