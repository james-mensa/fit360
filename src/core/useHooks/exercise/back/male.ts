import {bodyZones} from '@assets/register';
import {DayTy} from '@core/db/types';

interface PhaseType {
  difficulty: number;
  day: number;
  phase: number;
  title?: string;
}

export const malePlanFirstPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => ({
  day,
  total: 1,
  completed: 0,
  title: title || `Phase ${phase}: Back Basics`,
  phase,
  playlist: [
    {
      name: 'Dumbbell Pullover',
      description:
        'An exercise that targets the chest and back using a dumbbell.',
      point: 2,
      link: bodyZones.back.male.DumbbellPull_Over,
      duration: difficulty,
      completed: false,
      type: 'back',
    },
  ],
});

export const malePlanSecondPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => ({
  day,
  total: 1,
  completed: 0,
  title: title || `Phase ${phase}: Core Strength`,
  phase,
  playlist: [
    {
      name: 'Superman',
      description:
        'An exercise to strengthen the lower back by lifting arms and legs while lying face down.',
      point: 2,
      link: bodyZones.back.male.Posture_Superman,
      duration: difficulty,
      completed: false,
      type: 'back',
    },
  ],
});

export const malePlanThirdPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => ({
  day,
  total: 1,
  completed: 0,
  title: title || `Phase ${phase}: Rowing Focus`,
  phase,
  playlist: [
    {
      name: 'Smith Machine Rows',
      description:
        'A rowing exercise using the Smith machine to target the back muscles.',
      point: 2,
      link: bodyZones.back.male.SmithMachineRows,
      duration: difficulty,
      completed: false,
      type: 'back',
    },
  ],
});

export const malePlanFourthPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => ({
  day,
  total: 5,
  completed: 0,
  title: title || `Phase ${phase}: Comprehensive Back Workout`,
  phase,
  playlist: [
    {
      name: 'Dumbbell Pullover',
      description:
        'An exercise that targets the chest and back using a dumbbell.',
      point: 2,
      link: bodyZones.back.male.DumbbellPull_Over,
      duration: difficulty,
      completed: false,
      type: 'back',
    },
  ],
});

export const maleBackExercise: DayTy[] = [
  // Phase 1
  ...Array.from({length: 7}, (_, i) =>
    malePlanFirstPhase({difficulty: 120, day: i + 1, phase: 1}),
  ),
  ...Array.from({length: 7}, (_, i) =>
    malePlanFirstPhase({difficulty: 180, day: i + 8, phase: 1}),
  ),

  // Phase 2
  ...Array.from({length: 14}, (_, i) =>
    malePlanSecondPhase({difficulty: 180, day: i + 15, phase: 2}),
  ),

  // Phase 3
  ...Array.from({length: 15}, (_, i) =>
    malePlanThirdPhase({difficulty: 180, day: i + 29, phase: 3}),
  ),

  // Phase 4
  ...Array.from({length: 8}, (_, i) =>
    malePlanFirstPhase({difficulty: 180, day: i + 44, phase: 4}),
  ),
  ...Array.from({length: 7}, (_, i) =>
    malePlanFirstPhase({difficulty: 210, day: i + 52, phase: 4}),
  ),
  ...Array.from({length: 7}, (_, i) =>
    malePlanFirstPhase({difficulty: 210, day: i + 59, phase: 4}),
  ),

  // Advanced Phase 5
  ...Array.from({length: 7}, (_, i) =>
    malePlanFourthPhase({difficulty: 210, day: i + 66, phase: 5}),
  ),
  ...Array.from({length: 7}, (_, i) =>
    malePlanFourthPhase({difficulty: 240, day: i + 73, phase: 5}),
  ),

  // Final Phase 6
  ...Array.from({length: 7}, (_, i) =>
    malePlanSecondPhase({difficulty: 210, day: i + 80, phase: 6}),
  ),
  ...Array.from({length: 7}, (_, i) =>
    malePlanSecondPhase({difficulty: 240, day: i + 87, phase: 6}),
  ),
];
