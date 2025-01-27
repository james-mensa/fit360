import {DayTy} from '@core/db/types';
import {calculateCaloriesBurned} from '../helper';
import {getDietRecommendations} from './diet';

interface PhaseType {
  difficulty: number;
  day: number;
  phase: number;
  title?: string;
}

const createPhase = ({
  difficulty,
  day,
  phase,
  title,
  exercises,
}: PhaseType & {exercises: any[]}): DayTy => {
  const playlist = exercises.map(exercise => ({
    ...exercise,
    duration: difficulty,
    completed: false,
  }));
  return {
    day,
    total: exercises.length,
    completed: 0,
    title: title || `Phase ${phase}`,
    phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendations(phase),
  };
};
export const femalePlanFirstPhase = (params: PhaseType): DayTy =>
  createPhase({
    ...params,
    title: params.title || `Core Foundation \n Exercise`,
    exercises: [
      {
        name: 'Reverse Crunches',
        description:
          'A lower abdominal exercise that involves lifting the hips off the ground while bringing the knees towards the chest.',
        point: 2,
        link: 'Exercises_That_Help_You_Get_V_Reverse_Crunches',
        type: 'belly',
        path: 'belly',
      },
      {
        name: 'Flat Bench Leg Raise',
        description:
          'An exercise targeting the lower abs by raising the legs while lying on a bench.',
        point: 2,
        link: 'Exercises_for_Washboard_Abs_Flat_Bench_Leg_Raise',
        type: 'belly',
        path: 'belly',
      },
    ],
  });

export const femalePlanSecondPhase = (params: PhaseType): DayTy =>
  createPhase({
    ...params,
    title: params.title || `Core Strength \n Exercise`,
    exercises: [
      {
        name: 'Flutter Kicks',
        description:
          'A lower abdominal exercise where you kick your legs up and down while lying on your back.',
        point: 2,
        link: 'Exercises_for_Washboard_Abs_Flutter_Kicks',
        type: 'belly',
        path: 'belly',
      },
      {
        name: 'Toe Reach',
        description:
          'An exercise where you reach for your toes while lying on your back to target the upper abs.',
        point: 2,
        link: 'Exercises_for_Washboard_Abs_Toe_Reach',
        type: 'belly',
        path: 'belly',
      },
    ],
  });

export const femalePlanThirdPhase = (params: PhaseType): DayTy =>
  createPhase({
    ...params,
    title: params.title || `Core Strength and Balance \n Exercise`,
    exercises: [
      {
        name: 'Bicycle Crunch',
        description:
          'An exercise targeting the obliques and lower abs by simulating a pedaling motion while lying on your back.',
        point: 2,
        link: 'Exercises_to_Make_the_Most_of_Your_Oblique_Workout_Bicycle_Crunch',
        type: 'belly',
        path: 'belly',
      },
      {
        name: 'Side Plank',
        description:
          'An oblique exercise where you hold a plank position on your side to strengthen the core.',
        point: 2,
        link: 'Exercises_to_Make_the_Most_of_Your_Oblique_Workout_Side_Plank',
        type: 'belly',
        path: 'belly',
      },
    ],
  });

export const femalePlanFourthPhase = (params: PhaseType): DayTy =>
  createPhase({
    ...params,
    title: params.title || `Advanced Core Workouts \n Exercise`,
    exercises: [
      {
        name: 'Scissor Kicks',
        description:
          'An exercise where you alternate lifting each leg up and down while lying on your back to target the lower abs.',
        point: 2,
        link: 'ScissorKicks',
        type: 'belly',
        path: 'belly',
      },
      {
        name: 'Side Plank',
        description:
          'An oblique exercise where you hold a plank position on your side to strengthen the core.',
        point: 2,
        link: 'Exercises_to_Make_the_Most_of_Your_Oblique_Workout_Side_Plank',
        type: 'belly',
        path: 'belly',
      },
    ],
  });

export const femaleBellyExercise: DayTy[] = [
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
  ...Array.from({length: 7}, (_, i) =>
    femalePlanFourthPhase({difficulty: 180, day: i + 43, phase: 4}),
  ),
  ...Array.from({length: 7}, (_, i) =>
    femalePlanFourthPhase({difficulty: 210, day: i + 50, phase: 4}),
  ),
  ...Array.from({length: 7}, (_, i) =>
    femalePlanFourthPhase({difficulty: 210, day: i + 57, phase: 5}),
  ),
  ...Array.from({length: 7}, (_, i) =>
    femalePlanFourthPhase({difficulty: 240, day: i + 64, phase: 5}),
  ),
  ...Array.from({length: 7}, (_, i) =>
    femalePlanSecondPhase({difficulty: 240, day: i + 71, phase: 6}),
  ),
];
