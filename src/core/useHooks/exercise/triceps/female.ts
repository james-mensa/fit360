import {bodyZones} from '@assets/register';
import {DayTy} from '@core/db/types';

interface PhaseType {
  difficulty: number;
  day: number;
  title: string;
  phase: number;
}

export const femalePlanFirstPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  return {
    day: day,
    total: 1,
    completed: 0,
    title: title,
    phase: phase,
    playlist: [
      {
        name: 'Tricep Exercise 1',
        description: 'An exercise targeting the triceps.',
        point: 2,
        link: bodyZones.triceps.female.HonoredFamousIbex_size_restricted,
        duration: difficulty,
        completed: false,
        type: 'triceps',
      },
    ],
  };
};

export const femalePlanSecondPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  return {
    day: day,
    total: 1,
    completed: 0,
    title: title,
    phase: phase,
    playlist: [
      {
        name: 'Tricep Exercise 2',
        description: 'Another tricep-focused exercise.',
        point: 2,
        link: bodyZones.triceps.female.TricepOverhead,
        duration: difficulty,
        completed: false,
        type: 'triceps',
      },
    ],
  };
};

export const femalePlanThirdPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  return {
    day: day,
    total: 1,
    completed: 0,
    title: title,
    phase: phase,
    playlist: [
      {
        name: 'Tricep Exercise 3',
        description: 'An advanced tricep exercise.',
        point: 2,
        link: bodyZones.triceps.female.dumbbell_bent_over_triceps_kick,
        duration: difficulty,
        completed: false,
        type: 'triceps',
      },
    ],
  };
};

export const femalePlanFourthPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  return {
    day: day,
    total: 2,
    completed: 0,
    title: title,
    phase: phase,
    playlist: [
      {
        name: 'Tricep Exercise 4',
        description: 'A basic tricep exercise.',
        point: 2,
        link: bodyZones.triceps.female.HonoredFamousIbex_size_restricted,
        duration: difficulty,
        completed: false,
        type: 'triceps',
      },
      {
        name: 'Tricep Exercise 5',
        description: 'Another tricep exercise for variety.',
        point: 2,
        link: bodyZones.triceps.female.dumbbell_bent_over_triceps_kick,
        duration: difficulty,
        completed: false,
        type: 'triceps',
      },
    ],
  };
};

export const femaleTricepsExercise: DayTy[] = [
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      femalePlanFirstPhase({
        difficulty: 120,
        day: i + 1,
        title: 'Phase 1: Initial Strength Building',
        phase: 1,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      femalePlanFirstPhase({
        difficulty: 180,
        day: i + 8,
        title: 'Phase 1: Increased Intensity',
        phase: 1,
      }),
    ),

  ...Array(14)
    .fill(null)
    .map((_, i) =>
      femalePlanSecondPhase({
        difficulty: 180,
        day: i + 15,
        title: 'Phase 2: Intermediate Strength Building',
        phase: 2,
      }),
    ),

  ...Array(15)
    .fill(null)
    .map((_, i) =>
      femalePlanThirdPhase({
        difficulty: 180,
        day: i + 30,
        title: 'Phase 3: Advanced Strength Building',
        phase: 3,
      }),
    ),

  ...Array(6)
    .fill(null)
    .map((_, i) =>
      femalePlanFourthPhase({
        difficulty: 180,
        day: i + 45,
        title: 'Phase 4: Comprehensive Strength Training',
        phase: 4,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      femalePlanFourthPhase({
        difficulty: 210,
        day: i + 51,
        title: 'Phase 4: Enhanced Strength Training',
        phase: 4,
      }),
    ),

  ...Array(7)
    .fill(null)
    .map((_, i) =>
      femalePlanFourthPhase({
        difficulty: 240,
        day: i + 58,
        title: 'Phase 5: Peak Strength Training',
        phase: 5,
      }),
    ),

  ...Array(7)
    .fill(null)
    .map((_, i) =>
      femalePlanSecondPhase({
        difficulty: 210,
        day: i + 65,
        title: 'Phase 6: Advanced Conditioning',
        phase: 6,
      }),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      femalePlanSecondPhase({
        difficulty: 240,
        day: i + 72,
        title: 'Phase 6: Advanced Conditioning',
        phase: 6,
      }),
    ),
];
