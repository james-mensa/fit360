import {DayTy, WorkoutTy} from '@core/db/types';
import {calculateCaloriesBurned} from '../helper';
import {getDietRecommendationsForFemaleLegs} from './diet';

interface PhaseType {
  difficulty: number;
  day: number;
  title: string;
  phase: number;
}
export const femalePlanFirstPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  const playlist: WorkoutTy[] = [
    {
      name: 'Glute Bridge',
      description:
        'Strengthens the glutes and hamstrings with a bridge exercise',
      point: 2,
      link: 'Glute_Bridge',
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
    title: title,
    phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendationsForFemaleLegs(phase),
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
      name: 'Dumbbell Hold',
      description: 'Enhances grip and leg strength by holding a dumbbell',
      point: 2,
      link: 'Hold_the_top_of_a_dumbbell',
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
    title: title,
    phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendationsForFemaleLegs(phase),
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
      name: 'Laying Down Leg Raises',
      description: 'Targets leg muscles with raises performed while lying down',
      point: 2,
      link: 'Laying_down',
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
    title: title,
    phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendationsForFemaleLegs(phase),
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
      name: 'Lean Leg Workout',
      description:
        'Comprehensive leg workout focusing on lean muscle development',
      point: 2,
      link: 'Lean_Leg_Workout_cove',
      duration: difficulty,
      completed: false,
      type: 'legs',
      path: 'legs',
    },
    {
      name: 'Burpees',
      description:
        'Full-body exercise including legs to build strength and endurance',
      point: 2,
      link: 'burpees',
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
    title: title,
    phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendationsForFemaleLegs(phase),
  };
};

export const femaleLegsExercise: DayTy[] = [
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      femalePlanFirstPhase({
        difficulty: 120,
        day: i + 1,
        title: `Dumbbell Deadlifts (${120}s) \n Exercises`,
        phase: 1,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      femalePlanFirstPhase({
        difficulty: 180,
        day: i + 8,
        title: `Dumbbell Deadlifts (${180}s) \n Exercises`,
        phase: 1,
      }),
    ),
  ...Array(15)
    .fill(null)
    .map((_, i) =>
      femalePlanSecondPhase({
        difficulty: 180,
        day: i + 14,
        title: `Single Leg Reverse Lunge (${180}s) \n Exercises`,
        phase: 2,
      }),
    ),
  ...Array(15)
    .fill(null)
    .map((_, i) =>
      femalePlanThirdPhase({
        difficulty: 180,
        day: i + 31,
        title: `Dumbbell Deadlifts (${180}s) \n Exercises`,
        phase: 3,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      femalePlanFourthPhase({
        difficulty: 180,
        day: i + 46,
        title: `Comprehensive Leg Routine (${180}s) \n Exercises`,
        phase: 4,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      femalePlanFourthPhase({
        difficulty: 210,
        day: i + 53,
        title: `Comprehensive Leg Routine (${210}s) \n Exercises`,
        phase: 5,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      femalePlanFourthPhase({
        difficulty: 240,
        day: i + 60,
        title: `Comprehensive Leg Routine (${240}s) \n Exercises`,
        phase: 5,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      femalePlanSecondPhase({
        difficulty: 210,
        day: i + 67,
        title: `Single Leg Reverse Lunge (${210}s) \n Exercises`,
        phase: 6,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      femalePlanSecondPhase({
        difficulty: 240,
        day: i + 74,
        title: `Single Leg Reverse Lunge (${240}s) \n Exercises`,
        phase: 6,
      }),
    ),
];
