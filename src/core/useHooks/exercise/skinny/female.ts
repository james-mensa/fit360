import {DayTy, WorkoutTy} from '@core/db/types';

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
  difficulty: number;
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
  };
};

// Define different phases using the helper function
export const femalePlanFirstPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  return createPhasePlan({
    difficulty,
    day,
    title,
    phase,
    exercises: [
      {
        name: 'Burpees Set 1',
        description: 'High-intensity exercise to boost metabolism.',
        point: 2,
        link: 'burpees1',
        duration: difficulty,
        completed: false,
        type: 'skinny',
        path: 'skinny',
      },
      {
        name: 'Burpees Set 2',
        description: 'High-intensity exercise to boost metabolism.',
        point: 2,
        link: 'burpees2',
        duration: difficulty,
        completed: false,
        type: 'skinny',
        path: 'skinny',
      },
      {
        name: 'Burpees Set 3',
        description: 'High-intensity exercise to boost metabolism.',
        point: 2,
        link: 'burpees3',
        duration: difficulty,
        completed: false,
        type: 'skinny',
        path: 'skinny',
      },
      {
        name: 'High Knee Jacks',
        description: 'Cardio exercise to improve cardiovascular endurance.',
        point: 2,
        link: 'high_knee_jacks',
        duration: difficulty,
        completed: false,
        type: 'skinny',
        path: 'skinny',
      },
      {
        name: 'Slider Climbers',
        description: 'Exercise to enhance core strength and stability.',
        point: 2,
        link: 'SliderClimbers',
        duration: difficulty,
        completed: false,
        type: 'skinny',
        path: 'skinny',
      },
    ],
  });
};

export const femalePlanSecondPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  return createPhasePlan({
    difficulty,
    day,
    title,
    phase,
    exercises: [
      {
        name: 'Superman Exercise',
        description: 'Strengthens lower back and glutes.',
        point: 2,
        link: 'superman',
        duration: difficulty,
        completed: false,
        type: 'skinny',
        path: 'skinny',
      },
      {
        name: 'Hollow Rock',
        description: 'Core exercise to improve abdominal strength.',
        point: 2,
        link: 'hollow_rock',
        duration: difficulty,
        completed: false,
        type: 'skinny',
        path: 'skinny',
      },
      {
        name: 'Burpees Set 4',
        description: 'High-intensity exercise to boost metabolism.',
        point: 2,
        link: 'burpees4',
        duration: difficulty,
        completed: false,
        type: 'skinny',
        path: 'skinny',
      },
      {
        name: 'High Plank Hold',
        description: 'Exercise to enhance core strength and stability.',
        point: 2,
        link: 'high_plank_hold',
        duration: difficulty,
        completed: false,
        type: 'skinny',
        path: 'skinny',
      },
      {
        name: 'Burpees Set 5',
        description: 'High-intensity exercise to boost metabolism.',
        point: 2,
        link: 'burpees5',
        duration: difficulty,
        completed: false,
        type: 'skinny',
        path: 'skinny',
      },
    ],
  });
};

export const femalePlanThirdPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  return createPhasePlan({
    difficulty,
    day,
    title,
    phase,
    exercises: [
      {
        name: 'Burpees Set 6',
        description: 'High-intensity exercise to boost metabolism.',
        point: 2,
        link: 'burpees6',
        duration: difficulty,
        completed: false,
        type: 'skinny',
        path: 'skinny',
      },
      {
        name: 'Burpees Set 7',
        description: 'High-intensity exercise to boost metabolism.',
        point: 2,
        link: 'burpees7',
        duration: difficulty,
        completed: false,
        type: 'skinny',
        path: 'skinny',
      },
      {
        name: 'Burpees Set 8',
        description: 'High-intensity exercise to boost metabolism.',
        point: 2,
        link: 'burpees8',
        duration: difficulty,
        completed: false,
        type: 'skinny',
        path: 'skinny',
      },
      {
        name: 'Star Jump',
        description: 'Cardio exercise to enhance overall endurance.',
        point: 2,
        link: 'star_jump',
        duration: difficulty,
        completed: false,
        type: 'skinny',
        path: 'skinny',
      },
      {
        name: 'Inchworm',
        description: 'Exercise to improve flexibility and core strength.',
        point: 2,
        link: 'inchworm',
        duration: difficulty,
        completed: false,
        type: 'skinny',
        path: 'skinny',
      },
    ],
  });
};

export const femalePlanFourthPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  return createPhasePlan({
    difficulty,
    day,
    title,
    phase,
    exercises: [
      {
        name: 'Inchworm',
        description: 'Exercise to improve flexibility and core strength.',
        point: 2,
        link: 'inchworm',
        duration: difficulty,
        completed: false,
        type: 'skinny',
        path: 'skinny',
      },
      {
        name: 'Leg Drops',
        description: 'Core exercise targeting lower abdominal muscles.',
        point: 2,
        link: 'leg_drops',
        duration: difficulty,
        completed: false,
        type: 'skinny',
        path: 'skinny',
      },
      {
        name: 'Knee Push-Ups',
        description: 'Modified push-ups to build upper body strength.',
        point: 2,
        link: 'knee_Push_ups',
        duration: difficulty,
        completed: false,
        type: 'skinny',
        path: 'skinny',
      },
      {
        name: 'Plank Hold',
        description: 'Core exercise to enhance core strength and stability.',
        point: 2,
        link: 'plank1',
        duration: difficulty,
        completed: false,
        type: 'skinny',
        path: 'skinny',
      },
      {
        name: 'Jumping Jacks',
        description: 'Cardio exercise to boost cardiovascular fitness.',
        point: 2,
        link: 'sworkit_jumping_jack',
        duration: difficulty,
        completed: false,
        type: 'skinny',
        path: 'skinny',
      },
    ],
  });
};

// Define the complete exercise plan
export const femaleSkinnyExercise: DayTy[] = [
  ...Array.from({length: 7}, (_, i) =>
    femalePlanFirstPhase({
      difficulty: 120,
      day: i + 1,
      phase: 1,
      title: 'Initial Conditioning  \n Exercise',
    }),
  ),
  ...Array.from({length: 7}, (_, i) =>
    femalePlanFirstPhase({
      difficulty: 180,
      day: i + 8,
      phase: 1,
      title: 'Intensification  \n Exercise',
    }),
  ),

  ...Array.from({length: 16}, (_, i) =>
    femalePlanSecondPhase({
      difficulty: 180,
      day: i + 15,
      phase: 2,
      title: 'Core and Cardio Enhancement \n Exercise',
    }),
  ),

  ...Array.from({length: 15}, (_, i) =>
    femalePlanThirdPhase({
      difficulty: 180,
      day: i + 31,
      phase: 3,
      title: 'Advanced Conditioning \n Exercise',
    }),
  ),

  ...Array.from({length: 15}, (_, i) =>
    femalePlanFourthPhase({
      difficulty: 180,
      day: i + 46,
      phase: 4,
      title: 'Peak Performance Training \n Exercise',
    }),
  ),
  ...Array.from({length: 6}, (_, i) =>
    femalePlanFourthPhase({
      difficulty: 210,
      day: i + 61,
      phase: 4,
      title: 'Peak Performance Training (Advanced) \n Exercise',
    }),
  ),

  ...Array.from({length: 7}, (_, i) =>
    femalePlanFourthPhase({
      difficulty: 210,
      day: i + 67,
      phase: 5,
      title: 'Final Push \n Exercise',
    }),
  ),
  ...Array.from({length: 7}, (_, i) =>
    femalePlanFourthPhase({
      difficulty: 240,
      day: i + 74,
      phase: 5,
      title: 'Final Push (Advanced) \n Exercise',
    }),
  ),

  ...Array.from({length: 7}, (_, i) =>
    femalePlanSecondPhase({
      difficulty: 210,
      day: i + 81,
      phase: 6,
      title: 'Reassessment and Maintenance \n Exercise',
    }),
  ),
  ...Array.from({length: 7}, (_, i) =>
    femalePlanSecondPhase({
      difficulty: 240,
      day: i + 88,
      phase: 6,
      title: 'Reassessment and Maintenance (Advanced) \n Exercise',
    }),
  ),
];
