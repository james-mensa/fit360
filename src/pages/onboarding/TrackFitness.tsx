import React from 'react';
import {OnBoardingUI} from '@models/onboarding';
import {onBoardingSteps} from './common';
const TrackFitness = () => {
  return (
    <OnBoardingUI data={onBoardingSteps[2]} nextPage="GetStarted" step={2} />
  );
};
export default TrackFitness;
