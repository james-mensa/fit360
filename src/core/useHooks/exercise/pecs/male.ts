import {bodyZones} from '@assets/register';
import {DayTy} from '@core/db/types';

interface PhaseType {
  difficulty: number;
  day: number;
  title?: string;
  phase: number;
}

export const malePlanFirstPhase = ({
  difficulty,
  day,
  title = 'Phase 1 - Chest Workout',
  phase,
}: PhaseType): DayTy => {
  return {
    day: day,
    total: 3,
    completed: 0,
    title: title,
    phase: phase,
    playlist: [
      {
        name: 'Decline Bench Press',
        description: 'Decline bench press to target lower chest.',
        point: 2,
        link: bodyZones.pecs.male.DeclineB,
        duration: difficulty,
        completed: false,
        type: 'pecs',
      },
      {
        name: 'Pump Up Your Pecs',
        description: 'A chest exercise to increase blood flow and muscle pump.',
        point: 2,
        link: bodyZones.pecs.male.Pump_Up_Your_Pecs,
        duration: difficulty,
        completed: false,
        type: 'pecs',
      },
      {
        name: 'Cable Fly',
        description: 'Cable fly to enhance chest stretch and contraction.',
        point: 2,
        link: bodyZones.pecs.male.cablefly,
        duration: difficulty,
        completed: false,
        type: 'pecs',
      },
    ],
  };
};

export const malePlanSecondPhase = ({
  difficulty,
  day,
  title = 'Phase 2 - Chest Strength Training',
  phase,
}: PhaseType): DayTy => {
  return {
    day: day,
    total: 3,
    completed: 0,
    title: title,
    phase: phase,
    playlist: [
      {
        name: 'Close Grip Bench Press',
        description:
          'Bench press with close grip to target triceps and inner chest.',
        point: 2,
        link: bodyZones.pecs.male.close_grip_bench_press,
        duration: difficulty,
        completed: false,
        type: 'pecs',
      },
      {
        name: 'Decline Push-Up',
        description: 'Push-up with feet elevated to target upper chest.',
        point: 2,
        link: bodyZones.pecs.male.decline_push_up,
        duration: difficulty,
        completed: false,
        type: 'pecs',
      },
      {
        name: 'Incline Bench Press',
        description: 'Incline bench press to focus on upper chest development.',
        point: 2,
        link: bodyZones.pecs.male.incline_bench_press,
        duration: difficulty,
        completed: false,
        type: 'pecs',
      },
    ],
  };
};

export const malePlanThirdPhase = ({
  difficulty,
  day,
  title = 'Phase 3 - Advanced Chest Routine',
  phase,
}: PhaseType): DayTy => {
  return {
    day: day,
    total: 3,
    completed: 0,
    title: title,
    phase: phase,
    playlist: [
      {
        name: 'Incline Dumbbell Press',
        description:
          'Incline dumbbell press to target upper chest with dumbbells.',
        point: 2,
        link: bodyZones.pecs.male.inclinedumbbellpress,
        duration: difficulty,
        completed: false,
        type: 'pecs',
      },
      {
        name: 'Neutral Grip Chest Press',
        description:
          'Chest press with neutral grip to enhance chest activation.',
        point: 2,
        link: bodyZones.pecs.male.neutralgripchestpress,
        duration: difficulty,
        completed: false,
        type: 'pecs',
      },
      {
        name: 'Push-Up',
        description: 'Standard push-up to build chest strength and endurance.',
        point: 2,
        link: bodyZones.pecs.male.push_up,
        duration: difficulty,
        completed: false,
        type: 'pecs',
      },
    ],
  };
};

export const malePlanFourthPhase = ({
  difficulty,
  day,
  title = 'Phase 4 - Comprehensive Chest Routine',
  phase,
}: PhaseType): DayTy => {
  return {
    day: day,
    total: 3,
    completed: 0,
    title: title,
    phase: phase,
    playlist: [
      {
        name: 'Slow Clap Push-Up',
        description: 'Push-up with a slow clap for explosive strength.',
        point: 2,
        link: bodyZones.pecs.male.slowclap,
        duration: difficulty,
        completed: false,
        type: 'pecs',
      },
      {
        name: 'Staggered Press Up',
        description:
          'Press-up with staggered hands for increased chest activation.',
        point: 2,
        link: bodyZones.pecs.male.staggered_press_up,
        duration: difficulty,
        completed: false,
        type: 'pecs',
      },
      {
        name: 'Wide Push-Up',
        description: 'Wide grip push-up to target outer chest muscles.',
        point: 2,
        link: bodyZones.pecs.male.wide_push_up1,
        duration: difficulty,
        completed: false,
        type: 'pecs',
      },
    ],
  };
};

export const malePecsExercise: DayTy[] = [
  // Phase 1
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanFirstPhase({
        difficulty: 120,
        day: i + 1,
        title: 'Phase 1 - Chest Workout',
        phase: 1,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanFirstPhase({
        difficulty: 180,
        day: i + 8,
        title: 'Phase 1 - Chest Workout',
        phase: 1,
      }),
    ),

  // Phase 2
  ...Array(15)
    .fill(null)
    .map((_, i) =>
      malePlanSecondPhase({
        difficulty: 180,
        day: i + 15,
        title: 'Phase 2 - Chest Strength Training',
        phase: 2,
      }),
    ),

  // Phase 3
  ...Array(15)
    .fill(null)
    .map((_, i) =>
      malePlanThirdPhase({
        difficulty: 180,
        day: i + 30,
        title: 'Phase 3 - Advanced Chest Routine',
        phase: 3,
      }),
    ),

  // Phase 4
  ...Array(8)
    .fill(null)
    .map((_, i) =>
      malePlanFourthPhase({
        difficulty: 180,
        day: i + 45,
        title: 'Phase 4 - Comprehensive Chest Routine',
        phase: 4,
      }),
    ),
  ...Array(8)
    .fill(null)
    .map((_, i) =>
      malePlanFourthPhase({
        difficulty: 210,
        day: i + 53,
        title: 'Phase 4 - Comprehensive Chest Routine',
        phase: 4,
      }),
    ),

  // Phase 5
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanFourthPhase({
        difficulty: 210,
        day: i + 61,
        title: 'Phase 5 - Peak Chest Development',
        phase: 5,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanFourthPhase({
        difficulty: 240,
        day: i + 68,
        title: 'Phase 5 - Peak Chest Development',
        phase: 5,
      }),
    ),

  // Phase 6
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanSecondPhase({
        difficulty: 210,
        day: i + 61,
        title: 'Phase 6 - Chest Endurance Challenge',
        phase: 6,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanSecondPhase({
        difficulty: 240,
        day: i + 68,
        title: 'Phase 6 - Chest Endurance Challenge',
        phase: 6,
      }),
    ),
];
