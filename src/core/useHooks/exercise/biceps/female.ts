import {DayTy, WorkoutTy} from '@core/db/types';
import {calculateCaloriesBurned} from '../helper';
import {getDietRecommendations} from './diet';

interface PhaseType {
  difficulty: number;
  day: number;
  title?: string;
  phase: number;
}

const createPhase = (
  phaseFunc: (params: PhaseType) => DayTy,
  difficulty: number,
  startDay: number,
  length: number,
  phase: number,
): DayTy[] =>
  Array.from({length}, (_, i) =>
    phaseFunc({difficulty, day: startDay + i, phase}),
  );

export const femalePlanFirstPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  const playlist: WorkoutTy[] = [
    {
      name: 'Wide Grip Biceps Curl',
      description:
        'An exercise targeting the biceps using a wide grip to enhance muscle engagement and strength.',
      point: 2,
      link: 'Denise_Wide_Grip_20Biceps_20Curl',
      duration: difficulty,
      completed: false,
      type: 'biceps',
      path: 'biceps',
    },
    {
      name: 'Arnold Press',
      description:
        'A shoulder exercise that also engages the biceps, performed by rotating the palms while pressing weights overhead.',
      point: 2,
      link: 'Francine_arnold_press',
      duration: difficulty,
      completed: false,
      type: 'biceps',
      path: 'biceps',
    },
  ];
  return {
    day,
    total: 2,
    completed: 0,
    title: title || `Biceps Strength Foundation (${difficulty}s) \n Exercise`,
    phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendations(phase),
  };
};
export const femalePlanSecondPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  const playlist: WorkoutTy[] = [
    {
      name: 'Bent Over Row',
      description:
        'An exercise that targets the upper back and biceps by pulling weights towards the torso while bent over.',
      point: 2,
      link: 'Francine_bent_over_row',
      duration: difficulty,
      completed: false,
      type: 'biceps',
      path: 'biceps',
    },
    {
      name: 'Chest Press',
      description:
        'A chest exercise that also engages the biceps by pressing weights away from the chest while lying on a bench.',
      point: 2,
      link: 'Jo_chest_press',
      duration: difficulty,
      completed: false,
      type: 'biceps',
      path: 'biceps',
    },
  ];
  return {
    day,
    total: 2,
    completed: 0,
    title: title || `Upper Body Strength (${difficulty}s) \n Exercise`,
    phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendations(phase),
  };
};

export const femalePlanThirdPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  const playlist: WorkoutTy[] = [
    {
      name: 'Wide Lifted Bicep Curl',
      description:
        'A biceps curl performed with a wide grip and lifted position to maximize muscle contraction.',
      point: 2,
      link: 'Wide_Lifted_Bicep_Curl',
      duration: difficulty,
      completed: false,
      type: 'biceps',
      path: 'biceps',
    },
    {
      name: 'Single Arm Bicep Curl',
      description:
        'An exercise focusing on each arm individually to isolate and strengthen the biceps.',
      point: 2,
      link: 'dumbbell_single_arm_bicep_curl',
      duration: difficulty,
      completed: false,
      type: 'biceps',
      path: 'biceps',
    },
  ];
  return {
    day,
    total: 2,
    completed: 0,
    title: title || `Isolation (${difficulty}s) \n Exercise`,
    phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendations(phase),
  };
};
export const femalePlanFourthPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  const playlist: WorkoutTy[] = [
    {
      name: 'Lateral Raise to Front Raise',
      description:
        'An exercise combining lateral and front raises to target the shoulders and biceps.',
      point: 2,
      link: 'lateral_raise_to_front_raise_rachel',
      duration: difficulty,
      completed: false,
      type: 'biceps',
      path: 'biceps',
    },
    {
      name: 'Skull Crusher',
      description:
        'An exercise that targets the triceps with a focus on extending the arms while lying on a bench.',
      point: 2,
      link: 'skull_crusher_Rachel',
      duration: difficulty,
      completed: false,
      type: 'biceps',
      path: 'biceps',
    },
    {
      name: 'Three Point Row',
      description:
        'A rowing exercise that involves pulling weights towards the torso from three different positions to target the back and biceps.',
      point: 2,
      link: 'three_point_row',
      duration: difficulty,
      completed: false,
      type: 'biceps',
      path: 'biceps',
    },
  ];
  return {
    day,
    total: 3,
    completed: 0,
    title: title || `Comprehensive Conditioning (${difficulty}s) \n Exercise`,
    phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendations(phase),
  };
};
export const femaleBicepsExercise: DayTy[] = [
  ...createPhase(femalePlanFirstPhase, 120, 1, 14, 1), // Phase 1: 14 days
  ...createPhase(femalePlanSecondPhase, 180, 15, 14, 2), // Phase 2: 14 days
  ...createPhase(femalePlanThirdPhase, 180, 29, 14, 3), // Phase 3: 14 days
  ...createPhase(femalePlanFourthPhase, 180, 43, 14, 4), // Phase 4: 14 days
  ...createPhase(femalePlanFourthPhase, 210, 57, 14, 5), // Phase 5: 14 days
  ...createPhase(femalePlanFourthPhase, 240, 71, 14, 6), // Phase 6: 14 days
];
