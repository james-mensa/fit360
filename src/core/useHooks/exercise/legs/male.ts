import {bodyZones} from '@assets/register';
import {DayTy} from '@core/db/types';

interface PhaseType {
  difficulty: number;
  day: number;
  title: string;
  phase: number;
}

export const malePlanFirstPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  return {
    day: day,
    total: 1,
    completed: 0,
    title: title || `Phase ${phase} - Dumbbell Deadlifts (${difficulty}s)`,
    phase: phase,
    playlist: [
      {
        name: 'Dumbbell Deadlifts',
        description:
          'Targets the hamstrings, glutes, and lower back with deadlifts using dumbbells',
        point: 2,
        link: bodyZones.legs.male.DB_Deadlifts,
        duration: difficulty,
        completed: false,
        type: 'legs',
      },
    ],
  };
};

export const malePlanSecondPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  return {
    day: day,
    total: 1,
    completed: 0,
    title:
      title || `Phase ${phase} - Single Leg Reverse Lunge (${difficulty}s)`,
    phase: phase,
    playlist: [
      {
        name: 'Single Leg Reverse Lunge',
        description:
          'Strengthens the legs and glutes with a single-leg reverse lunge exercise',
        point: 2,
        link: bodyZones.legs.male.Single_Leg_Reverse_Lunge,
        duration: difficulty,
        completed: false,
        type: 'legs',
      },
    ],
  };
};

export const malePlanThirdPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  return {
    day: day,
    total: 1,
    completed: 0,
    title: title || `Phase ${phase} - Dumbbell Deadlifts (${difficulty}s)`,
    phase: phase,
    playlist: [
      {
        name: 'Dumbbell Deadlifts',
        description:
          'Targets the hamstrings, glutes, and lower back with deadlifts using dumbbells',
        point: 2,
        link: bodyZones.legs.male.DB_Deadlifts,
        duration: difficulty,
        completed: false,
        type: 'legs',
      },
    ],
  };
};

export const malePlanFourthPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  return {
    day: day,
    total: 2,
    completed: 0,
    title:
      title || `Phase ${phase} - Comprehensive Leg Routine (${difficulty}s)`,
    phase: phase,
    playlist: [
      {
        name: 'Single Leg Reverse Lunge',
        description:
          'Strengthens the legs and glutes with a single-leg reverse lunge exercise',
        point: 2,
        link: bodyZones.legs.male.Single_Leg_Reverse_Lunge,
        duration: difficulty,
        completed: false,
        type: 'legs',
      },
      {
        name: 'Dumbbell Deadlifts',
        description:
          'Targets the hamstrings, glutes, and lower back with deadlifts using dumbbells',
        point: 2,
        link: bodyZones.legs.male.DB_Deadlifts,
        duration: difficulty,
        completed: false,
        type: 'legs',
      },
    ],
  };
};

export const maleLegsExercise: DayTy[] = [
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanFirstPhase({
        difficulty: 120,
        day: i + 1,
        title: `Phase 1 - Dumbbell Deadlifts (${120}s)`,
        phase: 1,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanFirstPhase({
        difficulty: 180,
        day: i + 8,
        title: `Phase 1 - Dumbbell Deadlifts (${180}s)`,
        phase: 1,
      }),
    ),
  ...Array(15)
    .fill(null)
    .map((_, i) =>
      malePlanSecondPhase({
        difficulty: 180,
        day: i + 14,
        title: `Phase 2 - Single Leg Reverse Lunge (${180}s)`,
        phase: 2,
      }),
    ),
  ...Array(15)
    .fill(null)
    .map((_, i) =>
      malePlanThirdPhase({
        difficulty: 180,
        day: i + 31,
        title: `Phase 3 - Dumbbell Deadlifts (${180}s)`,
        phase: 3,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanFourthPhase({
        difficulty: 180,
        day: i + 46,
        title: `Phase 4 - Comprehensive Leg Routine (${180}s)`,
        phase: 4,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanFourthPhase({
        difficulty: 210,
        day: i + 53,
        title: `Phase 5 - Comprehensive Leg Routine (${210}s)`,
        phase: 5,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanFourthPhase({
        difficulty: 240,
        day: i + 60,
        title: `Phase 5 - Comprehensive Leg Routine (${240}s)`,
        phase: 5,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanSecondPhase({
        difficulty: 210,
        day: i + 67,
        title: `Phase 6 - Single Leg Reverse Lunge (${210}s)`,
        phase: 6,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanSecondPhase({
        difficulty: 240,
        day: i + 74,
        title: `Phase 6 - Single Leg Reverse Lunge (${240}s)`,
        phase: 6,
      }),
    ),
];
