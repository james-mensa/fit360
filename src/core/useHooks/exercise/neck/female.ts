import {bodyZones} from '@assets/register';
import {DayTy} from '@core/db/types';

interface PhaseType {
  difficulty: number;
  day: number;
  phase: number;
}

export const femalePlanFirstPhase = ({
  difficulty,
  day,
  phase,
}: PhaseType): DayTy => {
  return {
    day: day,
    total: 1,
    completed: 0,
    title: `Phase ${phase} - Neck Retraction (${difficulty}s)`,
    phase: phase,
    playlist: [
      {
        name: 'Neck Retraction',
        description: 'Exercise to improve neck posture and reduce neck pain.',
        point: 2,
        link: bodyZones.neck.female.CHIN_TUCK_,
        duration: difficulty,
        completed: false,
        type: 'neck',
      },
    ],
  };
};

export const femalePlanSecondPhase = ({
  difficulty,
  day,
  phase,
}: PhaseType): DayTy => {
  return {
    day: day,
    total: 1,
    completed: 0,
    title: `Phase ${phase} - Side-to-Side Neck Turns (${difficulty}s)`,
    phase: phase,
    playlist: [
      {
        name: 'Side-to-Side Neck Turns',
        description:
          'Exercise to enhance neck flexibility and reduce stiffness.',
        point: 2,
        link: bodyZones.neck.female.SIDE_TO_SIDE_TURNS,
        duration: difficulty,
        completed: false,
        type: 'neck',
      },
    ],
  };
};

export const femalePlanThirdPhase = ({
  difficulty,
  day,
  phase,
}: PhaseType): DayTy => {
  return {
    day: day,
    total: 2,
    completed: 0,
    title: `Phase ${phase} - Strength and Mobility (${difficulty}s)`,
    phase: phase,
    playlist: [
      {
        name: 'Superman',
        description: 'Strengthens the neck and upper back muscles.',
        point: 2,
        link: bodyZones.neck.female.Superman,
        duration: difficulty,
        completed: false,
        type: 'neck',
      },
      {
        name: 'Head Turns',
        description: 'Exercise to improve neck rotation and reduce tension.',
        point: 2,
        link: bodyZones.neck.female.head_turns,
        duration: difficulty,
        completed: false,
        type: 'neck',
      },
    ],
  };
};

export const femalePlanFourthPhase = ({
  difficulty,
  day,
  phase,
}: PhaseType): DayTy => {
  return {
    day: day,
    total: 2,
    completed: 0,
    title: `Phase ${phase} - Comprehensive Neck Routine (${difficulty}s)`,
    phase: phase,
    playlist: [
      {
        name: 'Neck Rotation',
        description: 'Exercise to improve neck mobility and reduce stiffness.',
        point: 2,
        link: bodyZones.neck.female.neck_rotate,
        duration: difficulty,
        completed: false,
        type: 'neck',
      },
      {
        name: 'Side-to-Side Neck Turns',
        description:
          'Exercise to enhance neck flexibility and reduce stiffness.',
        point: 2,
        link: bodyZones.neck.female.SIDE_TO_SIDE_TURNS,
        duration: difficulty,
        completed: false,
        type: 'neck',
      },
    ],
  };
};

export const femaleNeckExercise: DayTy[] = [
  // Phase 1
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      femalePlanFirstPhase({difficulty: 120, day: i + 1, phase: 1}),
    ),
  ...Array(6)
    .fill(null)
    .map((_, i) =>
      femalePlanFirstPhase({difficulty: 180, day: i + 8, phase: 1}),
    ),

  // Phase 2
  ...Array(15)
    .fill(null)
    .map((_, i) =>
      femalePlanSecondPhase({difficulty: 180, day: i + 14, phase: 2}),
    ),

  // Phase 3
  ...Array(15)
    .fill(null)
    .map((_, i) =>
      femalePlanThirdPhase({difficulty: 180, day: i + 31, phase: 3}),
    ),

  // Phase 4
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      femalePlanFourthPhase({difficulty: 180, day: i + 46, phase: 4}),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      femalePlanFourthPhase({difficulty: 210, day: i + 53, phase: 4}),
    ),

  // Phase 5
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      femalePlanFourthPhase({difficulty: 210, day: i + 61, phase: 5}),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      femalePlanFourthPhase({difficulty: 240, day: i + 68, phase: 5}),
    ),

  // Phase 6
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      femalePlanSecondPhase({difficulty: 210, day: i + 61, phase: 6}),
    ),
  ...Array(7)
    .fill(null)
    .map((_, i) =>
      femalePlanSecondPhase({difficulty: 240, day: i + 68, phase: 6}),
    ),
];
