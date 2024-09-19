import {DayTy, WorkoutTy} from '@core/db/types';
import {calculateCaloriesBurned} from '../helper';
import {getDietRecommendations} from './diet';

interface PhaseType {
  difficulty: number;
  day: number;
  title?: string;
  phase: number;
}

const femalePlanFirstPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  const playlist: WorkoutTy[] = [
    {
      name: 'Barbell Row',
      description:
        'A barbell row targets the upper back and lats using a barbell.',
      point: 2,
      link: 'Back_Moves_for_a_Stronger_Back_Barbell',
      duration: difficulty,
      completed: false,
      type: 'back',
      path: 'back',
    },
    {
      name: 'Resistance Band Pull Aparts',
      description:
        'This exercise strengthens the upper back using a resistance band.',
      point: 2,
      link: 'Back_Moves_for_a_Stronger_Back_Resistance_Band_Pull_Aparts',
      duration: difficulty,
      completed: false,
      type: 'back',
      path: 'back',
    },
  ];
  return {
    day: day,
    total: 2,
    completed: 0,
    title: title || `Foundational Back Strength \n Exercise`,
    phase: phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendations(phase),
  };
};

const femalePlanSecondPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  const playlist: WorkoutTy[] = [
    {
      name: 'Single Arm Dumbbell Row',
      description:
        'This exercise works on the back muscles using a single dumbbell.',
      point: 2,
      link: 'Back_Moves_for_a_Stronger_Back_Single_Arm_Dumbbell_Row_off_Bench',
      duration: difficulty,
      completed: false,
      type: 'back',
      path: 'back',
    },
    {
      name: 'Medicine Ball Woodchop',
      description:
        'A dynamic exercise working on the back and core using a medicine ball.',
      point: 2,
      link: 'Back_Woodchop_with_Medicine_Ball',
      duration: difficulty,
      completed: false,
      type: 'back',
      path: 'back',
    },
  ];
  return {
    day: day,
    total: 2,
    completed: 0,
    title: title || `Targeted Back Workouts \n Exercise`,
    phase: phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendations(phase),
  };
};

const femalePlanThirdPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  const playlist: WorkoutTy[] = [
    {
      name: 'Barbell Deadlift',
      description:
        'A fundamental strength exercise targeting the lower back and entire posterior chain.',
      point: 2,
      link: 'BarbellDeadlift',
      duration: difficulty,
      completed: false,
      type: 'back',
      path: 'back',
    },
    {
      name: 'Dumbbell Pullover',
      description:
        'An exercise that targets the chest and back using a dumbbell.',
      point: 2,
      link: 'Dumbbell_pullover',
      duration: difficulty,
      completed: false,
      type: 'back',
      path: 'back',
    },
    {
      name: 'Seated Lat Pull Down',
      description:
        'A high-rep, low-weight exercise targeting the latissimus dorsi muscles.',
      point: 2,
      link: 'Low_Weight_and_High_Reps_Seated_Lat_Pull_Down',
      duration: difficulty,
      completed: false,
      type: 'back',
      path: 'back',
    },
  ];
  return {
    day: day,
    total: 3,
    completed: 0,
    title: title || `Comprehensive Back Routine \n Exercise`,
    phase: phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendations(phase),
  };
};

const femalePlanFourthPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  const playlist: WorkoutTy[] = [
    {
      name: 'Reverse Fly with Dumbbells',
      description:
        'This exercise targets the rear deltoids and upper back muscles.',
      point: 2,
      link: 'Reverse_Fly_with_Dumbbells',
      duration: difficulty,
      completed: false,
      type: 'back',
      path: 'back',
    },
    {
      name: 'Bent Over Row',
      description:
        'A versatile exercise that targets the back muscles using dumbbells.',
      point: 2,
      link: 'Suit_Your_Needs_Bent_Over_Row',
      duration: difficulty,
      completed: false,
      type: 'back',
      path: 'back',
    },
    {
      name: 'Cat-Cow Stretch',
      description:
        'A gentle stretch for the back and neck, improving flexibility.',
      point: 2,
      link: 'cat_cow_in_pink_top',
      duration: difficulty,
      completed: false,
      type: 'back',
      path: 'back',
    },
  ];
  return {
    day: day,
    total: 3,
    completed: 0,
    title: title || 'Advanced Back Exercises \n Exercise',
    phase: phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendations(phase),
  };
};

export const femaleBackExercise: DayTy[] = [
  // Phase 1
  ...Array.from({length: 7}, (_, i) =>
    femalePlanFirstPhase({difficulty: 120, day: i + 1, phase: 1}),
  ),
  ...Array.from({length: 6}, (_, i) =>
    femalePlanFirstPhase({difficulty: 180, day: i + 8, phase: 1}),
  ),

  // Phase 2
  ...Array.from({length: 16}, (_, i) =>
    femalePlanSecondPhase({difficulty: 180, day: i + 14, phase: 2}),
  ),

  // Phase 3
  ...Array.from({length: 15}, (_, i) =>
    femalePlanThirdPhase({difficulty: 180, day: i + 30, phase: 3}),
  ),

  // Phase 4
  ...Array.from({length: 7}, (_, i) =>
    femalePlanFirstPhase({difficulty: 180, day: i + 45, phase: 4}),
  ),
  ...Array.from({length: 7}, (_, i) =>
    femalePlanFirstPhase({difficulty: 210, day: i + 52, phase: 4}),
  ),
  ...Array.from({length: 7}, (_, i) =>
    femalePlanFirstPhase({difficulty: 210, day: i + 59, phase: 4}),
  ),
  ...Array.from({length: 7}, (_, i) =>
    femalePlanThirdPhase({difficulty: 180, day: i + 66, phase: 4}),
  ),

  // Phase 5
  ...Array.from({length: 7}, (_, i) =>
    femalePlanFourthPhase({difficulty: 210, day: i + 73, phase: 5}),
  ),
  ...Array.from({length: 7}, (_, i) =>
    femalePlanFourthPhase({difficulty: 240, day: i + 80, phase: 5}),
  ),

  // Phase 6
  ...Array.from({length: 7}, (_, i) =>
    femalePlanSecondPhase({difficulty: 210, day: i + 87, phase: 6}),
  ),
  ...Array.from({length: 7}, (_, i) =>
    femalePlanSecondPhase({difficulty: 240, day: i + 94, phase: 6}),
  ),
];
