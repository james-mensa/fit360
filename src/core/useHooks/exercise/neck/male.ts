import {bodyZones} from '@assets/register';
import {DayTy} from '@core/db/types';

interface PhaseType {
  difficulty: number;
  day: number;
  phase: number;
}

export const malePlanFirstPhase = ({
  difficulty,
  day,
  phase,
}: PhaseType): DayTy => {
  return {
    day: day,
    total: 1,
    completed: 0,
    title: `Phase 1 - Basic Neck Flexibility Exercise (${difficulty}s)`,
    phase: phase,
    playlist: [
      {
        name: 'Neck Flexibility Exercise 1',
        description: 'Basic neck stretch to improve flexibility and posture.',
        point: 2,
        link: bodyZones.neck.male.neck_1,
        duration: difficulty,
        completed: false,
        type: 'neck',
      },
    ],
  };
};

export const malePlanSecondPhase = ({
  difficulty,
  day,
  phase,
}: PhaseType): DayTy => {
  return {
    day: day,
    total: 1,
    completed: 0,
    title: `Phase 2 - Stiff Neck Relief (${difficulty}s)`,
    phase: phase,
    playlist: [
      {
        name: 'Neck Stiffness Relief',
        description:
          'Exercise to alleviate stiffness and improve neck mobility.',
        point: 2,
        link: bodyZones.neck.male.stiff_neck,
        duration: difficulty,
        completed: false,
        type: 'neck',
      },
    ],
  };
};

export const malePlanThirdPhase = ({
  difficulty,
  day,
  phase,
}: PhaseType): DayTy => {
  return {
    day: day,
    total: 1,
    completed: 0,
    title: `Phase 3 - Advanced Neck Relief Exercises (${difficulty}s)`,
    phase: phase,
    playlist: [
      {
        name: 'Neck Stiffness Relief',
        description:
          'Exercise to alleviate stiffness and improve neck mobility.',
        point: 2,
        link: bodyZones.neck.male.stiff_neck,
        duration: difficulty,
        completed: false,
        type: 'neck',
      },
    ],
  };
};

export const malePlanFourthPhase = ({
  difficulty,
  day,
  phase,
}: PhaseType): DayTy => {
  return {
    day: day,
    total: 2,
    completed: 0,
    title: `Phase 4 - Comprehensive Neck Routine (${difficulty}s)`,
    phase: phase,
    playlist: [
      {
        name: 'Neck Stiffness Relief',
        description:
          'Exercise to alleviate stiffness and improve neck mobility.',
        point: 2,
        link: bodyZones.neck.male.stiff_neck,
        duration: difficulty,
        completed: false,
        type: 'neck',
      },
      {
        name: 'Neck Flexibility Exercise 1',
        description: 'Basic neck stretch to improve flexibility and posture.',
        point: 2,
        link: bodyZones.neck.male.neck_1,
        duration: difficulty,
        completed: false,
        type: 'neck',
      },
    ],
  };
};

export const maleNeckExercise: DayTy[] = [
  // Phase 1
  ...Array(7)
    .fill(null)
    .map((_, i) => malePlanFirstPhase({difficulty: 120, day: i + 1, phase: 1})),
  ...Array(7)
    .fill(null)
    .map((_, i) => malePlanFirstPhase({difficulty: 180, day: i + 8, phase: 1})),

  // Phase 2
  ...Array(15)
    .fill(null)
    .map((_, i) =>
      malePlanSecondPhase({difficulty: 180, day: i + 14, phase: 2}),
    ),

  // Phase 3
  ...Array(15)
    .fill(null)
    .map((_, i) =>
      malePlanThirdPhase({difficulty: 180, day: i + 31, phase: 3}),
    ),

  // Phase 4
  ...Array(8)
    .fill(null)
    .map((_, i) =>
      malePlanFourthPhase({difficulty: 180, day: i + 46, phase: 4}),
    ),
  ...Array(8)
    .fill(null)
    .map((_, i) =>
      malePlanFourthPhase({difficulty: 210, day: i + 54, phase: 4}),
    ),

  // Phase 5
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanFourthPhase({difficulty: 210, day: i + 61, phase: 5}),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanFourthPhase({difficulty: 240, day: i + 68, phase: 5}),
    ),

  // Phase 6
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanSecondPhase({difficulty: 210, day: i + 75, phase: 6}),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      malePlanSecondPhase({difficulty: 240, day: i + 82, phase: 6}),
    ),
];
