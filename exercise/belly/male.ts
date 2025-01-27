import {DayTy, WorkoutTy} from '@core/db/types';
import {calculateCaloriesBurned} from '../helper';
import {getDietRecommendations} from './diet';
interface PhaseType {
  difficulty: number;
  day: number;
  title?: string;
  phase: number;
}

export const malePlanFirstPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  const playlist: WorkoutTy[] = [
    {
      name: 'Ab Contractions',
      description:
        'A core exercise that involves contracting the abdominal muscles to strengthen the belly area.',
      point: 2,
      link: 'AbContractions',
      duration: difficulty,
      completed: false,
      type: 'belly',
      path: 'belly',
    },
    {
      name: 'Bicycle Crunches',
      description:
        'A dynamic abdominal exercise that targets the obliques and rectus abdominis by simulating a pedaling motion.',
      point: 2,
      link: 'BicycleCrunches',
      duration: difficulty,
      completed: false,
      type: 'belly',
      path: 'belly',
    },
  ];
  return {
    day,
    total: 2,
    completed: 0,
    title: title || `Core Strength Foundation \n Exercise`,
    phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendations(phase),
  };
};

export const malePlanSecondPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  const playlist: WorkoutTy[] = [
    {
      name: 'Boat Pose',
      description:
        'A yoga pose that strengthens the core and improves balance by holding a V-shaped position.',
      point: 2,
      link: 'BoatPose',
      duration: difficulty,
      completed: false,
      type: 'belly',
      path: 'belly',
    },
    {
      name: 'Hip Lift',
      description:
        'An exercise that targets the lower abs and glutes by lifting the hips while lying on your back.',
      point: 2,
      link: 'HipLift',
      duration: difficulty,
      completed: false,
      type: 'belly',
      path: 'belly',
    },
  ];
  return {
    day,
    total: 2,
    completed: 0,
    title: title || `Core Stability and Balance \n Exercise`,
    phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendations(phase),
  };
};

export const malePlanThirdPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  const playlist: WorkoutTy[] = [
    {
      name: 'Russian Twist with Legs Crossed',
      description:
        'A core exercise that involves twisting the torso while holding a weight and keeping the legs crossed to engage the obliques.',
      point: 2,
      link: 'How_to_Do_a_Russian_Twist_and_Strengthen_Your_Core_Legs_Crossed',
      duration: difficulty,
      completed: false,
      type: 'belly',
      path: 'belly',
    },
    {
      name: 'Leg Drops',
      description:
        'An abdominal exercise where you lower your legs towards the floor while keeping your lower back pressed to the ground.',
      point: 2,
      link: 'LegDrops',
      duration: difficulty,
      completed: false,
      type: 'belly',
      path: 'belly',
    },
  ];
  return {
    day,
    total: 2,
    completed: 0,
    title: title || `Advanced Core Challenges \n Exercise`,
    phase,
    burn_calories: calculateCaloriesBurned(playlist),
    playlist,
    diet: getDietRecommendations(phase),
  };
};
export const malePlanFourthPhase = ({
  difficulty,
  day,
  title,
  phase,
}: PhaseType): DayTy => {
  const playlist: WorkoutTy[] = [
    {
      name: 'The Hundred',
      description:
        'A Pilates exercise that strengthens the core by pumping the arms up and down while holding a stable position with the legs raised.',
      point: 2,
      link: 'TheHundred',
      duration: difficulty,
      completed: false,
      type: 'belly',
      path: 'belly',
    },
    {
      name: 'Rocking Plank',
      description:
        'A variation of the plank exercise that involves rocking back and forth to increase core stability and strength.',
      point: 2,
      link: 'RockingPlank',
      duration: difficulty,
      completed: false,
      type: 'belly',
      path: 'belly',
    },
    {
      name: 'Mountain Climbers',
      description:
        'A full-body exercise that involves alternating knee drives towards the chest while in a plank position to engage the core and improve cardiovascular fitness.',
      point: 2,
      link: 'MountainClimbers',
      duration: difficulty,
      completed: false,
      type: 'belly',
      path: 'belly',
    },
  ];
  return {
    day,
    total: 3,
    completed: 0,
    title: title || `Comprehensive Core Conditioning \n Exercise`,
    phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendations(phase),
  };
};

export const maleBellyExercise: DayTy[] = [
  // Phase 1: 14 days
  ...Array.from({length: 14}, (_, i) =>
    malePlanFirstPhase({difficulty: 120, day: i + 1, phase: 1}),
  ),

  // Phase 2: 14 days
  ...Array.from({length: 14}, (_, i) => {
    const day = i + 15;
    return i < 7
      ? malePlanFirstPhase({difficulty: 180, day, phase: 2})
      : malePlanSecondPhase({difficulty: 180, day, phase: 2});
  }),

  // Phase 3: 14 days
  ...Array.from({length: 14}, (_, i) =>
    malePlanThirdPhase({difficulty: 180, day: i + 29, phase: 3}),
  ),

  // Phase 4: 14 days
  ...Array.from({length: 14}, (_, i) => {
    const day = i + 43;
    return i < 7
      ? malePlanThirdPhase({difficulty: 180, day, phase: 4})
      : malePlanFourthPhase({difficulty: 210, day, phase: 4});
  }),

  // Phase 5: 14 days
  ...Array.from({length: 14}, (_, i) =>
    malePlanFourthPhase({difficulty: 210, day: i + 57, phase: 5}),
  ),

  // Phase 6: 14 days
  ...Array.from({length: 14}, (_, i) =>
    malePlanFourthPhase({difficulty: 240, day: i + 71, phase: 6}),
  ),
];
