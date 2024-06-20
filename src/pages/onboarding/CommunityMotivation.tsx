import React from 'react';
import {OnBoardingUI} from '@models/onboarding';
import {onBoardingSteps} from './common';
const CommunityMotivation = () => {
  return (
    <OnBoardingUI data={onBoardingSteps[1]} nextPage="TrackFitness" step={1} />
  );
};
export default CommunityMotivation;
