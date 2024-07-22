import {skinnyInstruction} from '@assets/register';
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
      link: skinnyInstruction.male.arm_circles,
    },
    {
      name: 'Plank Jack Burpees',
      description:
        'Full-body workout combining plank, jumping jacks, and burpees for cardiovascular and muscular endurance.',
      link: skinnyInstruction.male.Plank_Jack_Burpees,
    },
    {
      name: 'High Knee Run',
      description:
        'Cardio exercise focusing on increasing heart rate and lower body strength.',
      link: skinnyInstruction.male.highkneerun,
    },
    {
      name: 'Front Squat',
      description:
        'Strength exercise targeting the quads, glutes, and core stability.',
      link: skinnyInstruction.male.front_squat,
    },
    {
      name: 'Superman Exercise',
      description: 'Strengthens the lower back and improves core stability.',
      link: skinnyInstruction.male.superman1,
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
      link: skinnyInstruction.male.mountain_climbers,
    },
    {
      name: 'Leg Drop',
      description:
        'Core exercise to enhance lower abdominal strength and stability.',
      link: skinnyInstruction.male.legs_drop_2,
    },
    {
      name: 'Knee Tuck Crunch',
      description:
        'Abdominal exercise focusing on strengthening the upper and lower abs.',
      link: skinnyInstruction.male.knee_tuck_crunch,
    },
    {
      name: 'Superman Exercise',
      description: 'Strengthens the lower back and improves core stability.',
      link: skinnyInstruction.male.superman_2,
    },
    {
      name: 'Step Back Jacks with Knee Tuck',
      description:
        'Cardio and core exercise combining step-back lunges and knee tucks.',
      link: skinnyInstruction.male.Step_Back_Jacks_with_Knee_Tuck,
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
      link: skinnyInstruction.male.mountain_climbers2,
    },
    {
      name: 'Jumping Jacks',
      description:
        'Classic cardio exercise for full-body warm-up and endurance.',
      link: skinnyInstruction.male.jumping,
    },
    {
      name: 'Running in Place',
      description: 'Cardio exercise to improve stamina and leg strength.',
      link: skinnyInstruction.male.running_in_place,
    },
    {
      name: 'Plank',
      description:
        'Core stabilization exercise to enhance overall body strength and endurance.',
      link: skinnyInstruction.male.plank1,
    },
    {
      name: 'Leg Drops',
      description:
        'Core exercise focusing on lower abdominal strength and control.',
      link: skinnyInstruction.male.m_leg_drops,
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
      link: skinnyInstruction.male.mountainclimber,
    },
    {
      name: 'Jumping Jacks',
      description:
        'Classic cardio exercise for full-body warm-up and endurance.',
      link: skinnyInstruction.male.jumping_jacks,
    },
    {
      name: 'Running in Place',
      description: 'Cardio exercise to improve stamina and leg strength.',
      link: skinnyInstruction.male.running_in_place,
    },
    {
      name: 'Plank',
      description:
        'Core stabilization exercise to enhance overall body strength and endurance.',
      link: skinnyInstruction.male.plank1,
    },
    {
      name: 'High Knee Run',
      description:
        'Cardio exercise focusing on increasing heart rate and lower body strength.',
      link: skinnyInstruction.male.highkneerun,
    },
  ]);
};

export const maleSkinnyExercise: DayTy[] = [
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanFirstPhase({
        difficulty: 120,
        day: i + 1,
        title: 'Phase 1 - Week 1',
        phase: 1,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanFirstPhase({
        difficulty: 180,
        day: i + 8,
        title: 'Phase 1 - Week 2',
        phase: 1,
      }),
    ),
  ...Array(15)
    .fill(null)
    .map((_, i) =>
      malePlanSecondPhase({
        difficulty: 180,
        day: i + 15,
        title: 'Phase 2',
        phase: 2,
      }),
    ),
  ...Array(14)
    .fill(null)
    .map((_, i) =>
      malePlanThirdPhase({
        difficulty: 180,
        day: i + 30,
        title: 'Phase 3',
        phase: 3,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanFourthPhase({
        difficulty: 180,
        day: i + 44,
        title: 'Phase 4 - Week 1',
        phase: 4,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanFourthPhase({
        difficulty: 210,
        day: i + 51,
        title: 'Phase 4 - Week 2',
        phase: 4,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanFourthPhase({
        difficulty: 210,
        day: i + 58,
        title: 'Phase 5',
        phase: 5,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanFourthPhase({
        difficulty: 240,
        day: i + 65,
        title: 'Phase 6',
        phase: 6,
      }),
    ),
];
