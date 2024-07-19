import {bodyZones} from '@assets/register';
import {DayTy} from '@core/db/types';

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
): DayTy => ({
  day: day,
  total: exercises.length,
  completed: 5,
  title: `Phase ${phase} Routine (${difficulty}s)`,
  phase: phase,
  playlist: exercises.map(exercise => ({
    ...exercise,
    point: 2,
    duration: difficulty,
    completed: false,
    type: 'forearms',
  })),
});

export const malePlanFirstPhase = (params: PhaseType): DayTy =>
  createPlan(
    1,
    [
      {
        name: 'Crab Walks',
        description:
          'Strengthens forearms and improves grip by walking in a crab position',
        link: bodyZones.forearms.male.Crab_Walks,
      },
      {
        name: 'Grip Crush',
        description: 'Enhances grip strength with a crushing motion',
        link: bodyZones.forearms.male
          .Exercises_to_Do_at_the_Gym_or_at_Home_Grip_Crush,
      },
      {
        name: 'Forearm Twist',
        description: 'Strengthens forearms by twisting wrists',
        link: bodyZones.forearms.male.Forearm_Twist,
      },
      {
        name: 'Hammer Curl to Pause Twist',
        description:
          'Combines hammer curls with a pause twist for forearm engagement',
        link: bodyZones.forearms.male
          .HAMMER_CURL_TO_PAUSE_TWIST_AND_SUPINATED_LOWER,
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
        link: bodyZones.forearms.male.INCLINE_BENCH_ZOTTMAN_CURL,
      },
      {
        name: 'Linear Naughty Gar',
        description: 'Focuses on forearm strength with a linear movement',
        link: bodyZones.forearms.male.LinearNaughtyGar,
      },
      {
        name: 'Rear Roasters',
        description: 'Strengthens forearms with a rear-focused movement',
        link: bodyZones.forearms.male.Rear_Roasters,
      },
      {
        name: 'Wrist Curl',
        description: 'Builds forearm strength through wrist curling',
        link: bodyZones.forearms.male.Wrist_Curl,
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
        link: bodyZones.forearms.male.bent_over_row,
      },
      {
        name: 'Big Arms Exercise 1',
        description: 'Focuses on forearm strength with a specific movement',
        link: bodyZones.forearms.male.big_arms,
      },
      {
        name: 'Big Arms Exercise 2',
        description: 'Additional forearm strengthening exercise',
        link: bodyZones.forearms.male.big_arms_2,
      },
      {
        name: 'Lateral Raise',
        description: 'Targets forearms and shoulders with a lateral raise',
        link: bodyZones.forearms.male.how_to_do_a_lateral_raise,
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
        link: bodyZones.forearms.male.curlszottman,
      },
      {
        name: 'Hammer Curl',
        description: 'Strengthens forearms with a hammer grip curl',
        link: bodyZones.forearms.male.hammer_url,
      },
      {
        name: 'Tricep Extension',
        description:
          'Focuses on triceps and forearms with an extension movement',
        link: bodyZones.forearms.male.tricep_extension,
      },
      {
        name: 'Palm Supination Wrist Curl',
        description: 'Strengthens forearms with a palm-up wrist curl',
        link: bodyZones.forearms.male.palmsupwristcurl,
      },
    ],
    params,
  );

export const maleForearmsExercise: DayTy[] = [
  // ...Array.from({length: 7}, (_, i) =>
  //   malePlanFirstPhase({difficulty: 120, day: i + 1, phase: 1}),
  // ),
  // ...Array.from({length: 7}, (_, i) =>
  //   malePlanFirstPhase({difficulty: 180, day: i + 8, phase: 1}),
  // ),
  // ...Array.from({length: 15}, (_, i) =>
  //   malePlanSecondPhase({difficulty: 180, day: i + 15, phase: 2}),
  // ),
  // ...Array.from({length: 15}, (_, i) =>
  //   malePlanThirdPhase({difficulty: 180, day: i + 30, phase: 3}),
  // ),
  // ...Array.from({length: 14}, (_, i) =>
  //   malePlanFourthPhase({difficulty: 180, day: i + 45, phase: 4}),
  // ),
  // ...Array.from({length: 6}, (_, i) =>
  //   malePlanFourthPhase({difficulty: 210, day: i + 59, phase: 4}),
  // ),
  // ...Array.from({length: 7}, (_, i) =>
  //   malePlanFourthPhase({difficulty: 210, day: i + 65, phase: 5}),
  // ),
  // ...Array.from({length: 7}, (_, i) =>
  //   malePlanFourthPhase({difficulty: 240, day: i + 72, phase: 5}),
  // ),
  // ...Array.from({length: 14}, (_, i) =>
  //   malePlanSecondPhase({difficulty: 210, day: i + 79, phase: 6}),
  // ),
  // ...Array.from({length: 7}, (_, i) =>
  //   malePlanSecondPhase({difficulty: 240, day: i + 93, phase: 6}),
  // ),
];
