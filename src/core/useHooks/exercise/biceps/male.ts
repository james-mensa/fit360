import {DayTy, WorkoutTy} from '@core/db/types';
import {calculateCaloriesBurned} from '../helper';
import {getDietRecommendations} from './diet';

interface PhaseType {
  difficulty: number;
  day: number;
  title?: string;
  phase: number;
}

export const malePlanFirstPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  const playlist: WorkoutTy[] = [
    {
      name: 'Barbell Bicep Curl',
      description:
        'A classic exercise for building overall biceps strength and mass.',
      point: 2,
      link: 'Barbell_Bicep_Curl',
      duration: difficulty,
      completed: false,
      type: 'biceps',
      path: 'biceps',
    },
    {
      name: 'Concentration Curl',
      description:
        'An isolation exercise that targets the biceps peak by focusing on one arm at a time.',
      point: 2,
      link: 'Concentration_Curl',
      duration: difficulty,
      completed: false,
      type: 'biceps',
      path: 'biceps',
    },
  ];

  return {
    day: day,
    total: 2,
    completed: 0,
    title: title || `Biceps Strength Foundation (${difficulty}s) \n Exercise`,
    phase: phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendations(phase),
  };
};

export const malePlanSecondPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  const playlist: WorkoutTy[] = [
    {
      name: 'Leant Forward EZ Bar Curl',
      description:
        'An advanced curl variation using an EZ bar while leaning forward to target the biceps more intensively.',
      point: 2,
      link: 'Leant_Forward_EZ_Bar_Curl',
      duration: difficulty,
      completed: false,
      type: 'biceps',
      path: 'biceps',
    },
    {
      name: 'Prone Dumbbell Spider Curl',
      description:
        'A curl exercise performed while lying face down on an incline bench to isolate the biceps effectively.',
      point: 2,
      link: 'Prone_Dumbbell_Spider_Curl',
      duration: difficulty,
      completed: false,
      type: 'biceps',
      path: 'biceps',
    },
  ];

  return {
    day: day,
    total: 2,
    completed: 0,
    title: `Advanced Curl Techniques (${difficulty}s) \n Exercise`,
    phase: phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendations(phase),
  };
};

export const malePlanThirdPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  const playlist: WorkoutTy[] = [
    {
      name: 'Reverse Grip EZ Bar Curl',
      description:
        'A curl variation with a reverse grip to hit the biceps from a different angle and enhance forearm strength.',
      point: 2,
      link: 'Reverse_Grip_EZ_Bar_Curl',
      duration: difficulty,
      completed: false,
      type: 'biceps',
      path: 'biceps',
    },
    {
      name: 'Twisting Dumbbell Curl',
      description:
        'A dynamic curl exercise that includes a twisting motion to maximize biceps contraction and improve muscle definition.',
      point: 2,
      link: 'Twisting_Dumbbell_Curl',
      duration: difficulty,
      completed: false,
      type: 'biceps',
      path: 'biceps',
    },
  ];

  return {
    day: day,
    total: 2,
    completed: 0,
    title: title || `Dynamic Biceps Conditioning (${difficulty}s) \n Exercise`,
    phase: phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendations(phase),
  };
};

export const malePlanFourthPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  const playlist: WorkoutTy[] = [
    {
      name: 'Reverse Curl',
      description:
        'A reverse curl exercise targeting the biceps and forearms using a reverse grip to challenge the muscles differently.',
      point: 2,
      link: 'reversecurl',
      duration: difficulty,
      completed: false,
      type: 'biceps',
      path: 'biceps',
    },
    {
      name: 'Prone Dumbbell Spider Curl',
      description:
        'Repeat of the prone dumbbell spider curl to further isolate and work the biceps.',
      point: 2,
      link: 'Prone_Dumbbell_Spider_Curl',
      duration: difficulty,
      completed: false,
      type: 'biceps',
      path: 'biceps',
    },
  ];

  return {
    day: day,
    total: 2,
    completed: 0,
    title: title || `Comprehensive Biceps Workout (${difficulty}s) \n Exercise`,
    phase: phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendations(phase),
  };
};

export const maleBiscepsExercise: DayTy[] = [
  ...Array.from({length: 7}, (_, i) =>
    malePlanFirstPhase({difficulty: 120, day: i + 1, phase: 1}),
  ),
  ...Array.from({length: 7}, (_, i) =>
    malePlanFirstPhase({difficulty: 180, day: i + 8, phase: 1}),
  ),
  ...Array.from({length: 14}, (_, i) =>
    malePlanSecondPhase({difficulty: 180, day: i + 15, phase: 2}),
  ),
  ...Array.from({length: 14}, (_, i) =>
    malePlanThirdPhase({difficulty: 180, day: i + 29, phase: 3}),
  ),
  ...Array.from({length: 14}, (_, i) =>
    malePlanFourthPhase({difficulty: 180, day: i + 43, phase: 4}),
  ),
  ...Array.from({length: 14}, (_, i) =>
    malePlanFourthPhase({difficulty: 210, day: i + 57, phase: 5}),
  ),
  ...Array.from({length: 14}, (_, i) =>
    malePlanFourthPhase({difficulty: 240, day: i + 71, phase: 6}),
  ),
];
