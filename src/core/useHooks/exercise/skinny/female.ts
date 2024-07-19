import {skinnyInstruction} from '@assets/register';
import {DayTy} from '@core/db/types';

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
  exercises: {
    name: string;
    description: string;
    point: number;
    link: string;
    duration: number;
    completed: boolean;
  }[];
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
        link: skinnyInstruction.female.burpees1,
        duration: difficulty,
        completed: false,
      },
      {
        name: 'Burpees Set 2',
        description: 'High-intensity exercise to boost metabolism.',
        point: 2,
        link: skinnyInstruction.female.burpees2,
        duration: difficulty,
        completed: false,
      },
      {
        name: 'Burpees Set 3',
        description: 'High-intensity exercise to boost metabolism.',
        point: 2,
        link: skinnyInstruction.female.burpees3,
        duration: difficulty,
        completed: false,
      },
      {
        name: 'High Knee Jacks',
        description: 'Cardio exercise to improve cardiovascular endurance.',
        point: 2,
        link: skinnyInstruction.female.high_knee_jacks,
        duration: difficulty,
        completed: false,
      },
      {
        name: 'Slider Climbers',
        description: 'Exercise to enhance core strength and stability.',
        point: 2,
        link: skinnyInstruction.female.SliderClimbers,
        duration: difficulty,
        completed: false,
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
        link: skinnyInstruction.female.superman,
        duration: difficulty,
        completed: false,
      },
      {
        name: 'Hollow Rock',
        description: 'Core exercise to improve abdominal strength.',
        point: 2,
        link: skinnyInstruction.female.hollow_rock,
        duration: difficulty,
        completed: false,
      },
      {
        name: 'Burpees Set 4',
        description: 'High-intensity exercise to boost metabolism.',
        point: 2,
        link: skinnyInstruction.female.burpees4,
        duration: difficulty,
        completed: false,
      },
      {
        name: 'High Plank Hold',
        description: 'Exercise to enhance core strength and stability.',
        point: 2,
        link: skinnyInstruction.female.high_plank_hold,
        duration: difficulty,
        completed: false,
      },
      {
        name: 'Burpees Set 5',
        description: 'High-intensity exercise to boost metabolism.',
        point: 2,
        link: skinnyInstruction.female.burpees5,
        duration: difficulty,
        completed: false,
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
        link: skinnyInstruction.female.burpees6,
        duration: difficulty,
        completed: false,
      },
      {
        name: 'Burpees Set 7',
        description: 'High-intensity exercise to boost metabolism.',
        point: 2,
        link: skinnyInstruction.female.burpees7,
        duration: difficulty,
        completed: false,
      },
      {
        name: 'Burpees Set 8',
        description: 'High-intensity exercise to boost metabolism.',
        point: 2,
        link: skinnyInstruction.female.burpees8,
        duration: difficulty,
        completed: false,
      },
      {
        name: 'Star Jump',
        description: 'Cardio exercise to enhance overall endurance.',
        point: 2,
        link: skinnyInstruction.female.star_jump,
        duration: difficulty,
        completed: false,
      },
      {
        name: 'Inchworm',
        description: 'Exercise to improve flexibility and core strength.',
        point: 2,
        link: skinnyInstruction.female.inchworm,
        duration: difficulty,
        completed: false,
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
        link: skinnyInstruction.female.inchworm,
        duration: difficulty,
        completed: false,
      },
      {
        name: 'Leg Drops',
        description: 'Core exercise targeting lower abdominal muscles.',
        point: 2,
        link: skinnyInstruction.female.leg_drops,
        duration: difficulty,
        completed: false,
      },
      {
        name: 'Knee Push-Ups',
        description: 'Modified push-ups to build upper body strength.',
        point: 2,
        link: skinnyInstruction.female.knee_Push_ups,
        duration: difficulty,
        completed: false,
      },
      {
        name: 'Plank Hold',
        description: 'Core exercise to enhance core strength and stability.',
        point: 2,
        link: skinnyInstruction.female.plank1,
        duration: difficulty,
        completed: false,
      },
      {
        name: 'Jumping Jacks',
        description: 'Cardio exercise to boost cardiovascular fitness.',
        point: 2,
        link: skinnyInstruction.female.sworkit_jumping_jack,
        duration: difficulty,
        completed: false,
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
      title: 'Phase 1: Initial Conditioning',
    }),
  ),
  ...Array.from({length: 7}, (_, i) =>
    femalePlanFirstPhase({
      difficulty: 180,
      day: i + 8,
      phase: 1,
      title: 'Phase 1: Intensification',
    }),
  ),

  ...Array.from({length: 16}, (_, i) =>
    femalePlanSecondPhase({
      difficulty: 180,
      day: i + 15,
      phase: 2,
      title: 'Phase 2: Core and Cardio Enhancement',
    }),
  ),

  ...Array.from({length: 15}, (_, i) =>
    femalePlanThirdPhase({
      difficulty: 180,
      day: i + 31,
      phase: 3,
      title: 'Phase 3: Advanced Conditioning',
    }),
  ),

  ...Array.from({length: 15}, (_, i) =>
    femalePlanFourthPhase({
      difficulty: 180,
      day: i + 46,
      phase: 4,
      title: 'Phase 4: Peak Performance Training',
    }),
  ),
  ...Array.from({length: 6}, (_, i) =>
    femalePlanFourthPhase({
      difficulty: 210,
      day: i + 61,
      phase: 4,
      title: 'Phase 4: Peak Performance Training (Advanced)',
    }),
  ),

  ...Array.from({length: 7}, (_, i) =>
    femalePlanFourthPhase({
      difficulty: 210,
      day: i + 67,
      phase: 5,
      title: 'Phase 5: Final Push',
    }),
  ),
  ...Array.from({length: 7}, (_, i) =>
    femalePlanFourthPhase({
      difficulty: 240,
      day: i + 74,
      phase: 5,
      title: 'Phase 5: Final Push (Advanced)',
    }),
  ),

  ...Array.from({length: 7}, (_, i) =>
    femalePlanSecondPhase({
      difficulty: 210,
      day: i + 81,
      phase: 6,
      title: 'Phase 6: Reassessment and Maintenance',
    }),
  ),
  ...Array.from({length: 7}, (_, i) =>
    femalePlanSecondPhase({
      difficulty: 240,
      day: i + 88,
      phase: 6,
      title: 'Phase 6: Reassessment and Maintenance (Advanced)',
    }),
  ),
];
