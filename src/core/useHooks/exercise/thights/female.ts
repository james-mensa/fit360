import {DayTy} from '@core/db/types';

// Helper function to create workout plans
const createWorkoutPlan = ({
  difficulty,
  day,
  title,
  phase,
  exercises,
}: {
  difficulty: number;
  day: number;
  title: string;
  phase: number;
  exercises: Array<{name: string; link: string; description: string}>;
}): DayTy => {
  return {
    day,
    total: exercises.length,
    completed: 0,
    title,
    phase,
    playlist: exercises.map(exercise => ({
      name: exercise.name,
      description: exercise.description,
      point: 2,
      link: exercise.link,
      duration: difficulty,
      completed: false,
      type: 'thighs',
      path: 'thighs',
    })),
  };
};

// Define exercises for each phase
const phase1Exercises = [
  {
    name: 'Prone Hamstring Curl',
    link: 'Prone_hamstring_curl',
    description:
      'A targeted exercise to strengthen the inner and front thighs.',
  },
];

const phase2Exercises = [
  {
    name: 'Hamstring Curl with Dumbbell',
    link: 'Hamstring_curl_dumbbell',
    description: 'Hamstring curls using a dumbbell to enhance thigh strength.',
  },
];

const phase3Exercises = [
  {
    name: 'Hamstring Curl with a Ball',
    link: 'Hamstring_curl_with_a_ball',
    description:
      'An advanced hamstring curl using a ball for added resistance and stability.',
  },
];

const phase4Exercises = [
  {
    name: 'Seated Hamstring Curl',
    link: 'Seated_hamstring_curl',
    description:
      'Seated exercise focusing on the hamstrings for increased strength.',
  },
  {
    name: 'Standing Hamstring Curl',
    link: 'Standing_hamstring_curl',
    description:
      'Standing exercise targeting the hamstrings with additional resistance.',
  },
];

export const femaleThighsPlan: DayTy[] = [
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      createWorkoutPlan({
        difficulty: 120,
        day: i + 1,
        title: 'Initial Strength Building \n Exercise',
        phase: 1,
        exercises: phase1Exercises,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      createWorkoutPlan({
        difficulty: 180,
        day: i + 8,
        title: 'Increased Intensity \n Exercise',
        phase: 1,
        exercises: phase1Exercises,
      }),
    ),
  ...Array(15)
    .fill(null)
    .map((_, i) =>
      createWorkoutPlan({
        difficulty: 180,
        day: i + 15,
        title: 'Intermediate Strength Building \n Exercise',
        phase: 2,
        exercises: phase2Exercises,
      }),
    ),
  ...Array(9)
    .fill(null)
    .map((_, i) =>
      createWorkoutPlan({
        difficulty: 180,
        day: i + 30,
        title: 'Advanced Strength Building \n Exercise',
        phase: 3,
        exercises: phase3Exercises,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      createWorkoutPlan({
        difficulty: 180,
        day: i + 39,
        title: 'Advanced Strength Building \n Exercise',
        phase: 3,
        exercises: phase3Exercises,
      }),
    ),
  ...Array(6)
    .fill(null)
    .map((_, i) =>
      createWorkoutPlan({
        difficulty: 180,
        day: i + 46,
        title: 'Comprehensive Strength Training \n Exercise',
        phase: 4,
        exercises: phase4Exercises,
      }),
    ),
  ...Array(6)
    .fill(null)
    .map((_, i) =>
      createWorkoutPlan({
        difficulty: 210,
        day: i + 55,
        title: 'Enhanced Strength Training \n Exercise',
        phase: 4,
        exercises: phase4Exercises,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      createWorkoutPlan({
        difficulty: 210,
        day: i + 61,
        title: 'Peak Strength Training \n Exercise',
        phase: 5,
        exercises: phase4Exercises,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      createWorkoutPlan({
        difficulty: 240,
        day: i + 68,
        title: 'Peak Strength Training \n Exercise',
        phase: 5,
        exercises: phase4Exercises,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      createWorkoutPlan({
        difficulty: 210,
        day: i + 75,
        title: 'Advanced Conditioning \n Exercise',
        phase: 6,
        exercises: phase2Exercises,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      createWorkoutPlan({
        difficulty: 240,
        day: i + 82,
        title: 'Advanced Conditioning \n Exercise',
        phase: 6,
        exercises: phase2Exercises,
      }),
    ),
];
