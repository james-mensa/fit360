import {bodyZones} from '@assets/register';
import {DayTy} from '@core/db/types';

interface PhaseType {
  difficulty: number;
  day: number;
  phase: number;
  title?: string;
}

export const femalePlanFirstPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => ({
  day: day,
  total: 1,
  completed: 0,
  title: title || `Phase ${phase}: Foundation Building (${difficulty}s)`,
  phase: phase,
  playlist: [
    {
      name: 'Inner Wrist Curls',
      description: 'Strengthens forearm flexors by curling wrists inward.',
      point: 2,
      link: bodyZones.forearms.female.Inner_Wrist_Curls,
      duration: difficulty,
      completed: false,
      type: 'forearms',
    },
  ],
});

export const femalePlanSecondPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => ({
  day: day,
  total: 1,
  completed: 0,
  title: title || `Phase ${phase}: Strength Enhancement (${difficulty}s)`,
  phase: phase,
  playlist: [
    {
      name: 'Tricep Dips',
      description: 'Targets triceps and strengthens upper arms.',
      point: 2,
      link: bodyZones.forearms.female.tricep_dips,
      duration: difficulty,
      completed: false,
      type: 'forearms',
    },
  ],
});

export const femalePlanThirdPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => ({
  day: day,
  total: 1,
  completed: 0,
  title: title || `Phase ${phase}: Flexor Focus (${difficulty}s)`,
  phase: phase,
  playlist: [
    {
      name: 'Inner Wrist Curls',
      description: 'Strengthens forearm flexors by curling wrists inward.',
      point: 2,
      link: bodyZones.forearms.female.Inner_Wrist_Curls,
      duration: difficulty,
      completed: false,
      type: 'forearms',
    },
  ],
});

export const femalePlanFourthPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => ({
  day: day,
  total: 1,
  completed: 0,
  title: title || `Phase ${phase}: Upper Arm Conditioning (${difficulty}s)`,
  phase: phase,
  playlist: [
    {
      name: 'Tricep Dips',
      description: 'Targets triceps and strengthens upper arms.',
      point: 2,
      link: bodyZones.forearms.female.tricep_dips,
      duration: difficulty,
      completed: false,
      type: 'forearms',
    },
  ],
});

export const femaleForearmsExercise: DayTy[] = [
  ...Array.from({length: 7}, (_, i) =>
    femalePlanFirstPhase({difficulty: 120, day: i + 1, phase: 1}),
  ),
  ...Array.from({length: 7}, (_, i) =>
    femalePlanFirstPhase({difficulty: 180, day: i + 8, phase: 1}),
  ),
  ...Array.from({length: 14}, (_, i) =>
    femalePlanSecondPhase({difficulty: 180, day: i + 15, phase: 2}),
  ),
  ...Array.from({length: 14}, (_, i) =>
    femalePlanThirdPhase({difficulty: 180, day: i + 29, phase: 3}),
  ),
  ...Array.from({length: 14}, (_, i) =>
    femalePlanFourthPhase({difficulty: 180, day: i + 43, phase: 4}),
  ),
  ...Array.from({length: 14}, (_, i) =>
    femalePlanFourthPhase({difficulty: 210, day: i + 57, phase: 5}),
  ),
  ...Array.from({length: 14}, (_, i) =>
    femalePlanFourthPhase({difficulty: 240, day: i + 71, phase: 6}),
  ),
];
