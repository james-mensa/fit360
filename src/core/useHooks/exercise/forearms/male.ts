import {DayTy, WorkoutTy} from '@core/db/types';
import {calculateCaloriesBurned} from '../helper';
import {getDietRecommendationsForForearms} from './diet';

interface PhaseType {
  difficulty: number;
  day: number;
  phase: number;
  title?: string; // Optional title for flexibility
}

const createPlan = (
  phase: number,
  exercises: Array<{name: string; description: string; link: string}>,
  {difficulty, day}: PhaseType,
): DayTy => {
  const playlist: WorkoutTy[] = exercises.map(exercise => ({
    ...exercise,
    point: 2,
    duration: difficulty,
    completed: false,
    type: 'forearms',
    path: 'forearms',
  }));
  return {
    day: day,
    total: exercises.length,
    completed: 5,
    title: `Phase ${phase} Routine (${difficulty}s)`,
    phase: phase,
    playlist,
    burn_calories: calculateCaloriesBurned(playlist),
    diet: getDietRecommendationsForForearms(phase),
  };
};

export const malePlanFirstPhase = (params: PhaseType): DayTy =>
  createPlan(
    1,
    [
      {
        name: 'Crab Walks',
        description:
          'Strengthens forearms and improves grip by walking in a crab position',
        link: 'Crab_Walks',
      },
      {
        name: 'Grip Crush',
        description: 'Enhances grip strength with a crushing motion',
        link: 'Exercises_to_Do_at_the_Gym_or_at_Home_Grip_Crush',
      },
      {
        name: 'Forearm Twist',
        description: 'Strengthens forearms by twisting wrists',
        link: 'Forearm_Twist',
      },
      {
        name: 'Hammer Curl to Pause Twist',
        description:
          'Combines hammer curls with a pause twist for forearm engagement',
        link: 'HAMMER_CURL_TO_PAUSE_TWIST_AND_SUPINATED_LOWER',
      },
    ],
    params,
  );

export const malePlanSecondPhase = (params: PhaseType): DayTy =>
  createPlan(
    2,
    [
      {
        name: 'Incline Bench Zottman Curl',
        description: 'Targets forearms and biceps with an incline bench angle',
        link: 'INCLINE_BENCH_ZOTTMAN_CURL',
      },
      {
        name: 'Linear Naughty Gar',
        description: 'Focuses on forearm strength with a linear movement',
        link: 'LinearNaughtyGar',
      },
      {
        name: 'Rear Roasters',
        description: 'Strengthens forearms with a rear-focused movement',
        link: 'Rear_Roasters',
      },
      {
        name: 'Wrist Curl',
        description: 'Builds forearm strength through wrist curling',
        link: 'Wrist_Curl',
      },
    ],
    params,
  );

export const malePlanThirdPhase = (params: PhaseType): DayTy =>
  createPlan(
    3,
    [
      {
        name: 'Bent Over Row',
        description: 'Engages forearms and back with a bent-over position',
        link: 'bent_over_row',
      },
      {
        name: 'Big Arms Exercise 1',
        description: 'Focuses on forearm strength with a specific movement',
        link: 'big_arms',
      },
      {
        name: 'Big Arms Exercise 2',
        description: 'Additional forearm strengthening exercise',
        link: 'big_arms_2',
      },
      {
        name: 'Lateral Raise',
        description: 'Targets forearms and shoulders with a lateral raise',
        link: 'how_to_do_a_lateral_raise',
      },
    ],
    params,
  );

export const malePlanFourthPhase = (params: PhaseType): DayTy =>
  createPlan(
    4,
    [
      {
        name: 'Zottman Curl',
        description:
          'Combines curling and rotating motion for forearm development',
        link: 'curlszottman',
      },
      {
        name: 'Hammer Curl',
        description: 'Strengthens forearms with a hammer grip curl',
        link: 'hammer_url',
      },
      {
        name: 'Tricep Extension',
        description:
          'Focuses on triceps and forearms with an extension movement',
        link: 'tricep_extension',
      },
      {
        name: 'Palm Supination Wrist Curl',
        description: 'Strengthens forearms with a palm-up wrist curl',
        link: 'palmsupwristcurl',
      },
    ],
    params,
  );

export const maleForearmsExercise: DayTy[] = [
  ...Array.from({length: 7}, (_, i) =>
    malePlanFirstPhase({difficulty: 120, day: i + 1, phase: 1}),
  ),
  ...Array.from({length: 7}, (_, i) =>
    malePlanFirstPhase({difficulty: 180, day: i + 8, phase: 1}),
  ),
  ...Array.from({length: 15}, (_, i) =>
    malePlanSecondPhase({difficulty: 180, day: i + 15, phase: 2}),
  ),
  ...Array.from({length: 15}, (_, i) =>
    malePlanThirdPhase({difficulty: 180, day: i + 30, phase: 3}),
  ),
  ...Array.from({length: 14}, (_, i) =>
    malePlanFourthPhase({difficulty: 180, day: i + 45, phase: 4}),
  ),
  ...Array.from({length: 6}, (_, i) =>
    malePlanFourthPhase({difficulty: 210, day: i + 59, phase: 4}),
  ),
  ...Array.from({length: 7}, (_, i) =>
    malePlanFourthPhase({difficulty: 210, day: i + 65, phase: 5}),
  ),
  ...Array.from({length: 7}, (_, i) =>
    malePlanFourthPhase({difficulty: 240, day: i + 72, phase: 5}),
  ),
  ...Array.from({length: 14}, (_, i) =>
    malePlanSecondPhase({difficulty: 210, day: i + 79, phase: 6}),
  ),
  ...Array.from({length: 7}, (_, i) =>
    malePlanSecondPhase({difficulty: 240, day: i + 93, phase: 6}),
  ),
];
