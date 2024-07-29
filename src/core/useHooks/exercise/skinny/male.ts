import {DayTy} from '@core/db/types';

interface PhaseType {
  difficulty: number;
  day: number;
  title: string;
  phase: number;
}

// Helper function to generate workout plans for different phases
const createWorkoutPlan = (
  phase: number,
  difficulty: number,
  day: number,
  title: string,
  exercises: Array<{name: string; description: string; link: string}>,
): DayTy => {
  return {
    day: day,
    total: exercises.length,
    completed: 0,
    title: title,
    phase: phase,
    playlist: exercises.map(exercise => ({
      name: exercise.name,
      description: exercise.description,
      point: 2,
      link: exercise.link,
      duration: difficulty,
      completed: false,
      type: 'skinny',
      path: 'skinny',
    })),
  };
};

export const malePlanFirstPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  return createWorkoutPlan(phase, difficulty, day, title, [
    {
      name: 'Arm Circles',
      description:
        'Dynamic warm-up exercise to improve shoulder mobility and endurance.',
      link: 'arm_circles',
    },
    {
      name: 'Plank Jack Burpees',
      description:
        'Full-body workout combining plank, jumping jacks, and burpees for cardiovascular and muscular endurance.',
      link: 'Plank_Jack_Burpees',
    },
    {
      name: 'High Knee Run',
      description:
        'Cardio exercise focusing on increasing heart rate and lower body strength.',
      link: 'highkneerun',
    },
    {
      name: 'Front Squat',
      description:
        'Strength exercise targeting the quads, glutes, and core stability.',
      link: 'front_squat',
    },
    {
      name: 'Superman Exercise',
      description: 'Strengthens the lower back and improves core stability.',
      link: 'superman1',
    },
  ]);
};

export const malePlanSecondPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  return createWorkoutPlan(phase, difficulty, day, title, [
    {
      name: 'Mountain Climbers',
      description:
        'High-intensity exercise for cardiovascular fitness and core strength.',
      link: 'mountain_climbers',
    },
    {
      name: 'Leg Drop',
      description:
        'Core exercise to enhance lower abdominal strength and stability.',
      link: 'legs_drop_2',
    },
    {
      name: 'Knee Tuck Crunch',
      description:
        'Abdominal exercise focusing on strengthening the upper and lower abs.',
      link: 'knee_tuck_crunch',
    },
    {
      name: 'Superman Exercise',
      description: 'Strengthens the lower back and improves core stability.',
      link: 'superman_2',
    },
    {
      name: 'Step Back Jacks with Knee Tuck',
      description:
        'Cardio and core exercise combining step-back lunges and knee tucks.',
      link: 'Step_Back_Jacks_with_Knee_Tuck',
    },
  ]);
};

export const malePlanThirdPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  return createWorkoutPlan(phase, difficulty, day, title, [
    {
      name: 'Mountain Climbers',
      description:
        'High-intensity exercise for cardiovascular fitness and core strength.',
      link: 'mountain_climbers2',
    },
    {
      name: 'Jumping Jacks',
      description:
        'Classic cardio exercise for full-body warm-up and endurance.',
      link: 'jumping',
    },
    {
      name: 'Running in Place',
      description: 'Cardio exercise to improve stamina and leg strength.',
      link: 'running_in_place',
    },
    {
      name: 'Plank',
      description:
        'Core stabilization exercise to enhance overall body strength and endurance.',
      link: 'plank1',
    },
    {
      name: 'Leg Drops',
      description:
        'Core exercise focusing on lower abdominal strength and control.',
      link: 'm_leg_drops',
    },
  ]);
};

export const malePlanFourthPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  return createWorkoutPlan(phase, difficulty, day, title, [
    {
      name: 'Mountain Climbers',
      description:
        'High-intensity exercise for cardiovascular fitness and core strength.',
      link: 'mountainclimber',
    },
    {
      name: 'Jumping Jacks',
      description:
        'Classic cardio exercise for full-body warm-up and endurance.',
      link: 'jumping_jacks',
    },
    {
      name: 'Running in Place',
      description: 'Cardio exercise to improve stamina and leg strength.',
      link: 'running_in_place',
    },
    {
      name: 'Plank',
      description:
        'Core stabilization exercise to enhance overall body strength and endurance.',
      link: 'plank1',
    },
    {
      name: 'High Knee Run',
      description:
        'Cardio exercise focusing on increasing heart rate and lower body strength.',
      link: 'highkneerun',
    },
  ]);
};

// Define the complete exercise plan
export const maleSkinnyExercise: DayTy[] = [
  ...Array.from({length: 7}, (_, i) =>
    malePlanFirstPhase({
      difficulty: 120,
      day: i + 1,
      phase: 1,
      title: 'Initial Conditioning  \n Exercise',
    }),
  ),
  ...Array.from({length: 7}, (_, i) =>
    malePlanFirstPhase({
      difficulty: 180,
      day: i + 8,
      phase: 1,
      title: 'Intensification  \n Exercise',
    }),
  ),

  ...Array.from({length: 16}, (_, i) =>
    malePlanSecondPhase({
      difficulty: 180,
      day: i + 15,
      phase: 2,
      title: 'Core and Cardio Enhancement \n Exercise',
    }),
  ),

  ...Array.from({length: 15}, (_, i) =>
    malePlanThirdPhase({
      difficulty: 180,
      day: i + 31,
      phase: 3,
      title: 'Advanced Conditioning \n Exercise',
    }),
  ),

  ...Array.from({length: 15}, (_, i) =>
    malePlanFourthPhase({
      difficulty: 180,
      day: i + 46,
      phase: 4,
      title: 'Peak Performance Training \n Exercise',
    }),
  ),
  ...Array.from({length: 6}, (_, i) =>
    malePlanFourthPhase({
      difficulty: 210,
      day: i + 61,
      phase: 4,
      title: 'Peak Performance Training (Advanced) \n Exercise',
    }),
  ),

  ...Array.from({length: 7}, (_, i) =>
    malePlanFourthPhase({
      difficulty: 210,
      day: i + 67,
      phase: 5,
      title: 'Final Push \n Exercise',
    }),
  ),
  ...Array.from({length: 7}, (_, i) =>
    malePlanFourthPhase({
      difficulty: 240,
      day: i + 74,
      phase: 5,
      title: 'Final Push (Advanced) \n Exercise',
    }),
  ),

  ...Array.from({length: 7}, (_, i) =>
    malePlanSecondPhase({
      difficulty: 210,
      day: i + 81,
      phase: 6,
      title: 'Reassessment and Maintenance \n Exercise',
    }),
  ),
  ...Array.from({length: 7}, (_, i) =>
    malePlanSecondPhase({
      difficulty: 240,
      day: i + 88,
      phase: 6,
      title: 'Reassessment and Maintenance (Advanced) \n Exercise',
    }),
  ),
];
