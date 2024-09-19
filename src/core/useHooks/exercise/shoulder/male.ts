import {DayTy, WorkoutTy} from '@core/db/types';
import {calculateCaloriesBurned} from '../helper';
import {getDietRecommendationsForMale} from './diet';

// Define interface for phase configuration
interface PhaseType {
  difficulty: number;
  day: number;
  title: string;
  phase: number;
}

// Helper function to create a workout plan for a given phase
const createPhasePlan = ({
  day,
  title,
  phase,
  exercises,
}: {
  day: number;
  title: string;
  phase: number;
  exercises: WorkoutTy[];
}): DayTy => {
  return {
    day,
    total: exercises.length,
    completed: 0,
    title,
    phase,
    playlist: exercises,
    burn_calories: calculateCaloriesBurned(exercises),
    diet: getDietRecommendationsForMale(phase),
  };
};

// Define different phases using the helper function
export const malePlanFirstPhase = (config: PhaseType): DayTy =>
  createPhasePlan({
    ...config,
    exercises: [
      {
        name: 'Barbell Back Moves for a Stronger Back',
        description:
          'Focuses on building strength and endurance in the back muscles using a barbell.',
        point: 2,
        link: 'Back_Moves_for_a_Stronger_Back_Barbell',
        duration: config.difficulty,
        completed: false,
        type: 'shoulder',
        path: 'shoulder',
      },
    ],
  });

export const malePlanSecondPhase = (config: PhaseType): DayTy =>
  createPhasePlan({
    ...config,
    exercises: [
      {
        name: 'Broad Shoulders Workout',
        description:
          'A targeted workout to enhance shoulder width and definition.',
        point: 2,
        link: 'broad_shoulders',
        duration: config.difficulty,
        completed: false,
        type: 'shoulder',
        path: 'shoulder',
      },
    ],
  });

export const malePlanThirdPhase = (config: PhaseType): DayTy =>
  createPhasePlan({
    ...config,
    exercises: [
      {
        name: 'Shoulder Check',
        description:
          'Exercise focusing on checking and improving shoulder stability and strength.',
        point: 2,
        link: 'check',
        duration: config.difficulty,
        completed: false,
        type: 'shoulder',
        path: 'shoulder',
      },
      {
        name: 'Dumbbell Shoulder Press',
        description:
          'A fundamental shoulder exercise to build mass and strength using dumbbells.',
        point: 2,
        link: 'dumbbellshoulderpress',
        duration: config.difficulty,
        completed: false,
        type: 'shoulder',
        path: 'shoulder',
      },
    ],
  });

export const malePlanFourthPhase = (config: PhaseType): DayTy =>
  createPhasePlan({
    ...config,
    exercises: [
      {
        name: 'Dumbbell Shoulder Fly',
        description:
          'Isolates the shoulder muscles to improve definition and strength.',
        point: 2,
        link: 'dumbell_1',
        duration: config.difficulty,
        completed: false,
        type: 'shoulder',
        path: 'shoulder',
      },
      {
        name: 'Overhead Press',
        description:
          'A compound shoulder exercise that engages multiple muscle groups for overall strength.',
        point: 2,
        link: 'overheadpress_jj',
        duration: config.difficulty,
        completed: false,
        type: 'shoulder',
        path: 'shoulder',
      },
    ],
  });

// Define the complete exercise plan
export const maleShoulderExercise: DayTy[] = [
  ...Array.from({length: 7}, (_, i) =>
    malePlanFirstPhase({
      difficulty: 120,
      day: i + 1,
      phase: 1,
      title: 'Shoulder Strength \n Exercise',
    }),
  ),
  ...Array.from({length: 7}, (_, i) =>
    malePlanFirstPhase({
      difficulty: 180,
      day: i + 8,
      phase: 1,
      title: 'Shoulder Strength \n Exercise',
    }),
  ),

  ...Array.from({length: 14}, (_, i) =>
    malePlanSecondPhase({
      difficulty: 180,
      day: i + 15,
      phase: 2,
      title: 'Shoulder Width Development \n Exercise',
    }),
  ),

  ...Array.from({length: 9}, (_, i) =>
    malePlanThirdPhase({
      difficulty: 180,
      day: i + 31,
      phase: 3,
      title: 'Shoulder Strength and Endurance \n Exercise',
    }),
  ),
  ...Array.from({length: 6}, (_, i) =>
    malePlanThirdPhase({
      difficulty: 180,
      day: i + 40,
      phase: 3,
      title: 'Shoulder Strength and Endurance \n Exercise',
    }),
  ),

  ...Array.from({length: 8}, (_, i) =>
    malePlanFourthPhase({
      difficulty: 180,
      day: i + 46,
      phase: 4,
      title: 'Advanced Shoulder Training  \n Exercise',
    }),
  ),
  ...Array.from({length: 6}, (_, i) =>
    malePlanFourthPhase({
      difficulty: 210,
      day: i + 55,
      phase: 4,
      title: 'Advanced Shoulder Training \n Exercise',
    }),
  ),

  ...Array.from({length: 7}, (_, i) =>
    malePlanFourthPhase({
      difficulty: 210,
      day: i + 61,
      phase: 5,
      title: 'Peak Shoulder Performance \n Exercise',
    }),
  ),
  ...Array.from({length: 7}, (_, i) =>
    malePlanFourthPhase({
      difficulty: 240,
      day: i + 68,
      phase: 5,
      title: 'Peak Shoulder Performance \n Exercise',
    }),
  ),

  ...Array.from({length: 7}, (_, i) =>
    malePlanSecondPhase({
      difficulty: 210,
      day: i + 75,
      phase: 6,
      title: 'Reassessment \n Exercise',
    }),
  ),
  ...Array.from({length: 7}, (_, i) =>
    malePlanSecondPhase({
      difficulty: 240,
      day: i + 82,
      phase: 6,
      title: 'Reassessment Phase \n Exercise',
    }),
  ),
];
