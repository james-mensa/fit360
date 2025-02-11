import {DayTy, WorkoutTy} from '@core/db/types';
import {calculateCaloriesBurned} from '../helper';
import {getDietRecommendationsForForearms} from './diet';

interface PhaseType {
  difficulty: number;
  day: number;
  phase: number;
  title?: string;
}

export const femalePlanFirstPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  const playlist: WorkoutTy[] = [
    {
      name: 'Inner Wrist Curls',
      description: 'Strengthens forearm flexors by curling wrists inward.',
      point: 2,
      link: 'Inner_Wrist_Curls',
      duration: difficulty,
      completed: false,
      type: 'forearms',
      path: 'forearms',
    },
  ];

  return {
    day: day,
    total: 1,
    completed: 0,
    title: title || `Foundation Building (${difficulty}s) \n Exercise`,
    phase: phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendationsForForearms(phase),
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
      name: 'Tricep Dips',
      description: 'Targets triceps and strengthens upper arms.',
      point: 2,
      link: 'tricep_dips',
      duration: difficulty,
      completed: false,
      type: 'forearms',
      path: 'forearms',
    },
  ];

  return {
    day: day,
    total: 1,
    completed: 0,
    title: title || `Strength Enhancement (${difficulty}s) \n Exercise`,
    phase: phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendationsForForearms(phase),
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
      name: 'Inner Wrist Curls',
      description: 'Strengthens forearm flexors by curling wrists inward.',
      point: 2,
      link: 'Inner_Wrist_Curls',
      duration: difficulty,
      completed: false,
      type: 'forearms',
      path: 'forearms',
    },
  ];

  return {
    day: day,
    total: 1,
    completed: 0,
    title: title || `Flexor Focus (${difficulty}s) \n Exercise`,
    phase: phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendationsForForearms(phase),
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
      name: 'Tricep Dips',
      description: 'Targets triceps and strengthens upper arms.',
      point: 2,
      link: 'tricep_dips',
      duration: difficulty,
      completed: false,
      type: 'forearms',
      path: 'forearms',
    },
  ];

  return {
    day: day,
    total: 1,
    completed: 0,
    title: title || `Upper Arm Conditioning (${difficulty}s) \n Exercise`,
    phase: phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendationsForForearms(phase),
  };
};

export const femaleForearmsExercise: DayTy[] = [
  ...Array.from({length: 7}, (_, i) =>
    femalePlanFirstPhase({difficulty: 120, day: i + 1, phase: 1}),
  ),
  ...Array.from({length: 7}, (_, i) =>
    femalePlanFirstPhase({difficulty: 180, day: i + 8, phase: 1}),
  ),
  ...Array.from({length: 14}, (_, i) =>
    femalePlanSecondPhase({difficulty: 180, day: i + 15, phase: 2}),
  ),
  ...Array.from({length: 14}, (_, i) =>
    femalePlanThirdPhase({difficulty: 180, day: i + 29, phase: 3}),
  ),
  ...Array.from({length: 14}, (_, i) =>
    femalePlanFourthPhase({difficulty: 180, day: i + 43, phase: 4}),
  ),
  ...Array.from({length: 14}, (_, i) =>
    femalePlanFourthPhase({difficulty: 210, day: i + 57, phase: 5}),
  ),
  ...Array.from({length: 14}, (_, i) =>
    femalePlanFourthPhase({difficulty: 240, day: i + 71, phase: 6}),
  ),
];
