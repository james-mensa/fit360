import {bodyZones} from '@assets/register';
import {DayTy} from '@core/db/types';

interface PhaseType {
  difficulty: number;
  day: number;
  title?: string;
  phase: number;
}

const createPhase = (
  phaseFunc: (params: PhaseType) => DayTy,
  difficulty: number,
  startDay: number,
  length: number,
  phase: number,
): DayTy[] =>
  Array.from({length}, (_, i) =>
    phaseFunc({difficulty, day: startDay + i, phase}),
  );

export const femalePlanFirstPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => ({
  day,
  total: 2,
  completed: 0,
  title: title || `Phase ${phase}: Biceps Strength Foundation (${difficulty}s)`,
  phase,
  playlist: [
    {
      name: 'Wide Grip Biceps Curl',
      description:
        'An exercise targeting the biceps using a wide grip to enhance muscle engagement and strength.',
      point: 2,
      link: bodyZones.bisceps.female.Denise_Wide_Grip_20Biceps_20Curl,
      duration: difficulty,
      completed: false,
      type: 'biceps',
    },
    {
      name: 'Arnold Press',
      description:
        'A shoulder exercise that also engages the biceps, performed by rotating the palms while pressing weights overhead.',
      point: 2,
      link: bodyZones.bisceps.female.Francine_arnold_press,
      duration: difficulty,
      completed: false,
      type: 'biceps',
    },
  ],
});

export const femalePlanSecondPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => ({
  day,
  total: 2,
  completed: 0,
  title: title || `Phase ${phase}: Upper Body Strength (${difficulty}s)`,
  phase,
  playlist: [
    {
      name: 'Bent Over Row',
      description:
        'An exercise that targets the upper back and biceps by pulling weights towards the torso while bent over.',
      point: 2,
      link: bodyZones.bisceps.female.Francine_bent_over_row,
      duration: difficulty,
      completed: false,
      type: 'biceps',
    },
    {
      name: 'Chest Press',
      description:
        'A chest exercise that also engages the biceps by pressing weights away from the chest while lying on a bench.',
      point: 2,
      link: bodyZones.bisceps.female.Jo_chest_press,
      duration: difficulty,
      completed: false,
      type: 'biceps',
    },
  ],
});

export const femalePlanThirdPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => ({
  day,
  total: 2,
  completed: 0,
  title: title || `Phase ${phase}: Isolation and Definition (${difficulty}s)`,
  phase,
  playlist: [
    {
      name: 'Wide Lifted Bicep Curl',
      description:
        'A biceps curl performed with a wide grip and lifted position to maximize muscle contraction.',
      point: 2,
      link: bodyZones.bisceps.female.Wide_Lifted_Bicep_Curl,
      duration: difficulty,
      completed: false,
      type: 'biceps',
    },
    {
      name: 'Single Arm Bicep Curl',
      description:
        'An exercise focusing on each arm individually to isolate and strengthen the biceps.',
      point: 2,
      link: bodyZones.bisceps.female.dumbbell_single_arm_bicep_curl,
      duration: difficulty,
      completed: false,
      type: 'biceps',
    },
  ],
});

export const femalePlanFourthPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => ({
  day,
  total: 3,
  completed: 0,
  title: title || `Phase ${phase}: Comprehensive Conditioning (${difficulty}s)`,
  phase,
  playlist: [
    {
      name: 'Lateral Raise to Front Raise',
      description:
        'An exercise combining lateral and front raises to target the shoulders and biceps.',
      point: 2,
      link: bodyZones.bisceps.female.lateral_raise_to_front_raise_rachel,
      duration: difficulty,
      completed: false,
      type: 'biceps',
    },
    {
      name: 'Skull Crusher',
      description:
        'An exercise that targets the triceps with a focus on extending the arms while lying on a bench.',
      point: 2,
      link: bodyZones.bisceps.female.skull_crusher_Rachel,
      duration: difficulty,
      completed: false,
      type: 'biceps',
    },
    {
      name: 'Three Point Row',
      description:
        'A rowing exercise that involves pulling weights towards the torso from three different positions to target the back and biceps.',
      point: 2,
      link: bodyZones.bisceps.female.three_point_row,
      duration: difficulty,
      completed: false,
      type: 'biceps',
    },
  ],
});

export const femaleBicepsExercise: DayTy[] = [
  ...createPhase(femalePlanFirstPhase, 120, 1, 14, 1), // Phase 1: 14 days
  ...createPhase(femalePlanSecondPhase, 180, 15, 14, 2), // Phase 2: 14 days
  ...createPhase(femalePlanThirdPhase, 180, 29, 14, 3), // Phase 3: 14 days
  ...createPhase(femalePlanFourthPhase, 180, 43, 14, 4), // Phase 4: 14 days
  ...createPhase(femalePlanFourthPhase, 210, 57, 14, 5), // Phase 5: 14 days
  ...createPhase(femalePlanFourthPhase, 240, 71, 14, 6), // Phase 6: 14 days
];
