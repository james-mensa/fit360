import {DayTy, WorkoutTy} from '@core/db/types';
import {calculateCaloriesBurned} from '../helper';
import {getDietRecommendationsForMaleLegs} from './diet';

interface PhaseType {
  difficulty: number;
  day: number;
  title: string;
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
      name: 'Dumbbell Deadlifts',
      description:
        'Targets the hamstrings, glutes, and lower back with deadlifts using dumbbells',
      point: 2,
      link: 'DB_Deadlifts',
      duration: difficulty,
      completed: false,
      type: 'legs',
      path: 'legs',
    },
  ];

  return {
    day: day,
    total: 1,
    completed: 0,
    title: title || `Phase ${phase} - Dumbbell Deadlifts (${difficulty}s)`,
    phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendationsForMaleLegs(phase),
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
      name: 'Single Leg Reverse Lunge',
      description:
        'Strengthens the legs and glutes with a single-leg reverse lunge exercise',
      point: 2,
      link: 'Single_Leg_Reverse_Lunge',
      duration: difficulty,
      completed: false,
      type: 'legs',
      path: 'legs',
    },
  ];

  return {
    day: day,
    total: 1,
    completed: 0,
    title:
      title || `Phase ${phase} - Single Leg Reverse Lunge (${difficulty}s)`,
    phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendationsForMaleLegs(phase),
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
      name: 'Dumbbell Deadlifts',
      description:
        'Targets the hamstrings, glutes, and lower back with deadlifts using dumbbells',
      point: 2,
      link: 'DB_Deadlifts',
      duration: difficulty,
      completed: false,
      type: 'legs',
      path: 'legs',
    },
  ];

  return {
    day: day,
    total: 1,
    completed: 0,
    title: title || `Phase ${phase} - Dumbbell Deadlifts (${difficulty}s)`,
    phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendationsForMaleLegs(phase),
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
      name: 'Single Leg Reverse Lunge',
      description:
        'Strengthens the legs and glutes with a single-leg reverse lunge exercise',
      point: 2,
      link: 'Single_Leg_Reverse_Lunge',
      duration: difficulty,
      completed: false,
      type: 'legs',
      path: 'legs',
    },
    {
      name: 'Dumbbell Deadlifts',
      description:
        'Targets the hamstrings, glutes, and lower back with deadlifts using dumbbells',
      point: 2,
      link: 'DB_Deadlifts',
      duration: difficulty,
      completed: false,
      type: 'legs',
      path: 'legs',
    },
  ];

  return {
    day: day,
    total: 2,
    completed: 0,
    title:
      title || `Phase ${phase} - Comprehensive Leg Routine (${difficulty}s)`,
    phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendationsForMaleLegs(phase),
  };
};

export const maleLegsExercise: DayTy[] = [
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanFirstPhase({
        difficulty: 120,
        day: i + 1,
        title: 'Dumbbell Deadlifts \n Exercises',
        phase: 1,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanFirstPhase({
        difficulty: 180,
        day: i + 8,
        title: 'Dumbbell Deadlifts \n Exercises',
        phase: 1,
      }),
    ),
  ...Array(15)
    .fill(null)
    .map((_, i) =>
      malePlanSecondPhase({
        difficulty: 180,
        day: i + 15,
        title: 'Single Leg Reverse Lunge \n Exercises',
        phase: 2,
      }),
    ),
  ...Array(15)
    .fill(null)
    .map((_, i) =>
      malePlanThirdPhase({
        difficulty: 180,
        day: i + 30,
        title: 'Dumbbell Deadlifts\n Exercises',
        phase: 3,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanFourthPhase({
        difficulty: 180,
        day: i + 45,
        title: 'Comprehensive Leg Routine \n Exercises',
        phase: 4,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanFourthPhase({
        difficulty: 210,
        day: i + 52,
        title: 'Comprehensive Leg Routine \n Exercises',
        phase: 5,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanFourthPhase({
        difficulty: 240,
        day: i + 59,
        title: `Comprehensive Leg Routine (${240}s) \n Exercises`,
        phase: 6,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanSecondPhase({
        difficulty: 210,
        day: i + 66,
        title: `Single Leg Reverse Lunge (${210}s) \n Exercises`,
        phase: 6,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanSecondPhase({
        difficulty: 240,
        day: i + 73,
        title: `Single Leg Reverse Lunge (${240}s) \n Exercises`,
        phase: 6,
      }),
    ),
];
