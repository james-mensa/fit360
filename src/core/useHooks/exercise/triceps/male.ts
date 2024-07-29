import {DayTy} from '@core/db/types';

interface PhaseType {
  difficulty: number;
  day: number;
  title: string;
  phase: number;
}

// Helper function to create a workout plan for a specific phase
const createPlan = (
  exercises: {name: string; link: string; description: string}[],
  {difficulty, day, title, phase}: PhaseType,
): DayTy => {
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
      type: 'triceps',
      path: 'triceps',
    })),
  };
};

// Exercise definitions for different phases
const phaseExercises = {
  phase1: [
    {
      name: 'Javelin Press',
      link: 'Javelin_Press',
      description:
        'An isolation exercise for the triceps that focuses on the long head, performed with a barbell or dumbbell.',
    },
    {
      name: 'Tate Press',
      link: 'Tate_Press',
      description:
        'Targets the inner triceps and helps in building strength and mass, performed with dumbbells.',
    },
    {
      name: 'Barbell Tricep Extension',
      link: 'barbelltricepsextension',
      description:
        'A classic exercise to enhance tricep strength, performed with a barbell and focusing on full extension of the arms.',
    },
  ],
  phase2: [
    {
      name: 'Close Grip Bench Press',
      link: 'close_grip_bench_press',
      description:
        'A bench press variation that places more emphasis on the triceps due to the narrow grip.',
    },
    {
      name: 'Diamond Push-Ups',
      link: 'diamond',
      description:
        'Push-ups performed with hands close together to increase tricep activation and overall arm strength.',
    },
    {
      name: 'Diamond Press-Up',
      link: 'diamond_press_up',
      description:
        'An advanced push-up variation that challenges the triceps further by changing the hand position to a diamond shape.',
    },
  ],
  phase3: [
    {
      name: 'Floor Press',
      link: 'floor_press',
      description:
        'A chest and triceps exercise performed on the floor, reducing shoulder strain and focusing on triceps strength.',
    },
    {
      name: 'Kettlebell Floor Press',
      link: 'kettlebell_floor',
      description:
        'A variation of the floor press using kettlebells to target triceps and improve grip strength.',
    },
    {
      name: 'Push-Up',
      link: 'pressup',
      description:
        'A fundamental bodyweight exercise that engages the triceps, chest, and shoulders for overall upper body strength.',
    },
  ],
  phase4: [
    {
      name: 'Single Arm Dumbbell Tricep Extension',
      link: 'single_arm_dumbbell_tricep_extension',
      description:
        'An isolation exercise for the triceps, performed with a single dumbbell to ensure balanced development and focus.',
    },
    {
      name: 'Skull Crusher',
      link: 'skullcrushergif',
      description:
        'A triceps exercise performed by extending the arms while holding a barbell or dumbbells, aiming to increase tricep strength and size.',
    },
    {
      name: 'Tricep Bulking',
      link: 'tricep_bulking',
      description:
        'An intense triceps exercise designed to maximize muscle growth and strength through high volume and resistance.',
    },
  ],
};

// Generate workout plans for each phase
export const malePlanFirstPhase = (params: PhaseType): DayTy =>
  createPlan(phaseExercises.phase1, params);
export const malePlanSecondPhase = (params: PhaseType): DayTy =>
  createPlan(phaseExercises.phase2, params);
export const malePlanThirdPhase = (params: PhaseType): DayTy =>
  createPlan(phaseExercises.phase3, params);
export const malePlanFourthPhase = (params: PhaseType): DayTy =>
  createPlan(phaseExercises.phase4, params);

// Generate the full workout plan
export const maleTricepsExercise: DayTy[] = [
  // Phase 1 - Initial Strength Building
  ...Array.from({length: 7}, (_, i) =>
    malePlanFirstPhase({
      difficulty: 120,
      day: i + 1,
      title: 'Phase 1 - Initial Strength Building',
      phase: 1,
    }),
  ),
  ...Array.from({length: 7}, (_, i) =>
    malePlanFirstPhase({
      difficulty: 180,
      day: i + 8,
      title: ' Initial Strength Building \n Exercise',
      phase: 1,
    }),
  ),

  // Phase 2 - Intermediate Development
  ...Array.from({length: 15}, (_, i) =>
    malePlanSecondPhase({
      difficulty: 180,
      day: i + 14,
      title: 'Intermediate Development \n Exercise',
      phase: 2,
    }),
  ),

  // Phase 3 - Advanced Strength and Endurance
  ...Array.from({length: 13}, (_, i) =>
    malePlanThirdPhase({
      difficulty: 180,
      day: i + 31,
      title: 'Advanced Strength and Endurance \n Exercise',
      phase: 3,
    }),
  ),

  // Phase 4 - Peak Performance
  ...Array.from({length: 7}, (_, i) =>
    malePlanFourthPhase({
      difficulty: 180,
      day: i + 46,
      title: 'Peak Performance \n Exercise',
      phase: 4,
    }),
  ),
  ...Array.from({length: 6}, (_, i) =>
    malePlanFourthPhase({
      difficulty: 210,
      day: i + 55,
      title: 'Peak Performance \n Exercise',
      phase: 4,
    }),
  ),
  ...Array.from({length: 7}, (_, i) =>
    malePlanFourthPhase({
      difficulty: 240,
      day: i + 61,
      title: 'Peak Performance \n Exercise',
      phase: 4,
    }),
  ),

  // Phase 5 - Advanced Strength and Mass
  ...Array.from({length: 7}, (_, i) =>
    malePlanFourthPhase({
      difficulty: 240,
      day: i + 68,
      title: 'Advanced Strength and Mass \n Exercise',
      phase: 5,
    }),
  ),

  // Phase 6 - Final Refinement and Conditioning
  ...Array.from({length: 7}, (_, i) =>
    malePlanSecondPhase({
      difficulty: 210,
      day: i + 61,
      title: 'Final Refinement and Conditioning \n Exercise',
      phase: 6,
    }),
  ),
  ...Array.from({length: 7}, (_, i) =>
    malePlanSecondPhase({
      difficulty: 240,
      day: i + 68,
      title: 'Final Refinement and Conditioning \n Exercise',
      phase: 6,
    }),
  ),
];
