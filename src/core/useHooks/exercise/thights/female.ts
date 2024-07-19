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
        name: 'string',
        description: '',
        point: 2,
        link: bodyZones.thighs.female.Prone_hamstring_curl,
        duration: difficulty,
        completed: false,
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
        name: 'string',
        description: '',
        point: 2,
        link: bodyZones.thighs.female.Hamstring_curl_dumbbell,
        duration: difficulty,
        completed: false,
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
        name: 'string',
        description: '',
        point: 2,
        link: bodyZones.thighs.female.Hamstring_curl_with_a_ball,
        duration: difficulty,
        completed: false,
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
        name: 'string',
        description: '',
        point: 2,
        link: bodyZones.thighs.female.Seated_hamstring_curl,
        duration: difficulty,
        completed: false,
      },
      {
        name: 'string',
        description: '',
        point: 2,
        link: bodyZones.thighs.female.Standing_hamstring_curl,
        duration: difficulty,
        completed: false,
      },
    ],
  };
};

export const femaleThightsExercise: DayTy[] = [
  femalePlanFirstPhase({difficulty: 120, day: 1, title: '', phase: 1}),
  femalePlanFirstPhase({difficulty: 120, day: 2, title: '', phase: 1}),
  femalePlanFirstPhase({difficulty: 120, day: 3, title: '', phase: 1}),
  femalePlanFirstPhase({difficulty: 120, day: 4, title: '', phase: 1}),
  femalePlanFirstPhase({difficulty: 120, day: 5, title: '', phase: 1}),
  femalePlanFirstPhase({difficulty: 120, day: 6, title: '', phase: 1}),
  femalePlanFirstPhase({difficulty: 120, day: 7, title: '', phase: 1}),
  femalePlanFirstPhase({difficulty: 180, day: 8, title: '', phase: 1}),
  femalePlanFirstPhase({difficulty: 180, day: 9, title: '', phase: 1}),
  femalePlanFirstPhase({difficulty: 180, day: 10, title: '', phase: 1}),
  femalePlanFirstPhase({difficulty: 180, day: 11, title: '', phase: 1}),
  femalePlanFirstPhase({difficulty: 180, day: 12, title: '', phase: 1}),
  femalePlanFirstPhase({difficulty: 180, day: 13, title: '', phase: 1}),

  femalePlanFirstPhase({difficulty: 180, day: 14, title: '', phase: 2}),
  femalePlanSecondPhase({difficulty: 180, day: 15, title: '', phase: 2}),
  femalePlanSecondPhase({difficulty: 180, day: 16, title: '', phase: 2}),
  femalePlanSecondPhase({difficulty: 180, day: 17, title: '', phase: 2}),
  femalePlanSecondPhase({difficulty: 180, day: 18, title: '', phase: 2}),
  femalePlanSecondPhase({difficulty: 180, day: 19, title: '', phase: 2}),
  femalePlanSecondPhase({difficulty: 180, day: 20, title: '', phase: 2}),
  femalePlanSecondPhase({difficulty: 180, day: 21, title: '', phase: 2}),
  femalePlanSecondPhase({difficulty: 180, day: 22, title: '', phase: 2}),
  femalePlanSecondPhase({difficulty: 180, day: 23, title: '', phase: 2}),
  femalePlanSecondPhase({difficulty: 180, day: 24, title: '', phase: 2}),
  femalePlanSecondPhase({difficulty: 180, day: 25, title: '', phase: 2}),
  femalePlanSecondPhase({difficulty: 180, day: 26, title: '', phase: 2}),
  femalePlanSecondPhase({difficulty: 180, day: 27, title: '', phase: 2}),
  femalePlanSecondPhase({difficulty: 180, day: 28, title: '', phase: 2}),
  femalePlanSecondPhase({difficulty: 180, day: 29, title: '', phase: 2}),
  femalePlanSecondPhase({difficulty: 180, day: 30, title: '', phase: 2}),

  femalePlanThirdPhase({difficulty: 180, day: 31, title: '', phase: 3}),
  femalePlanThirdPhase({difficulty: 180, day: 32, title: '', phase: 3}),
  femalePlanThirdPhase({difficulty: 180, day: 33, title: '', phase: 3}),
  femalePlanThirdPhase({difficulty: 180, day: 34, title: '', phase: 3}),
  femalePlanThirdPhase({difficulty: 180, day: 35, title: '', phase: 3}),
  femalePlanThirdPhase({difficulty: 180, day: 36, title: '', phase: 3}),
  femalePlanThirdPhase({difficulty: 180, day: 37, title: '', phase: 3}),
  femalePlanThirdPhase({difficulty: 180, day: 38, title: '', phase: 3}),
  femalePlanFirstPhase({difficulty: 180, day: 39, title: '', phase: 3}),
  femalePlanThirdPhase({difficulty: 180, day: 40, title: '', phase: 3}),
  femalePlanThirdPhase({difficulty: 180, day: 41, title: '', phase: 3}),
  femalePlanFirstPhase({difficulty: 180, day: 42, title: '', phase: 3}),
  femalePlanThirdPhase({difficulty: 180, day: 43, title: '', phase: 3}),
  femalePlanThirdPhase({difficulty: 180, day: 44, title: '', phase: 3}),
  femalePlanThirdPhase({difficulty: 180, day: 45, title: '', phase: 3}),

  femalePlanFirstPhase({difficulty: 180, day: 46, title: '', phase: 4}),
  femalePlanFirstPhase({difficulty: 180, day: 47, title: '', phase: 4}),
  femalePlanFirstPhase({difficulty: 180, day: 48, title: '', phase: 4}),
  femalePlanFirstPhase({difficulty: 180, day: 49, title: '', phase: 4}),
  femalePlanFirstPhase({difficulty: 180, day: 50, title: '', phase: 4}),
  femalePlanFirstPhase({difficulty: 180, day: 51, title: '', phase: 4}),
  femalePlanFirstPhase({difficulty: 180, day: 52, title: '', phase: 4}),
  femalePlanThirdPhase({difficulty: 180, day: 53, title: '', phase: 4}),
  femalePlanThirdPhase({difficulty: 180, day: 54, title: '', phase: 4}),
  femalePlanFirstPhase({difficulty: 210, day: 55, title: '', phase: 4}),
  femalePlanFirstPhase({difficulty: 210, day: 56, title: '', phase: 4}),
  femalePlanFirstPhase({difficulty: 210, day: 57, title: '', phase: 4}),
  femalePlanFirstPhase({difficulty: 210, day: 58, title: '', phase: 4}),
  femalePlanFirstPhase({difficulty: 210, day: 59, title: '', phase: 4}),
  femalePlanFirstPhase({difficulty: 210, day: 60, title: '', phase: 4}),

  femalePlanFourthPhase({difficulty: 210, day: 61, title: '', phase: 5}),
  femalePlanFourthPhase({difficulty: 210, day: 62, title: '', phase: 5}),
  femalePlanFourthPhase({difficulty: 210, day: 63, title: '', phase: 5}),
  femalePlanFourthPhase({difficulty: 210, day: 64, title: '', phase: 5}),
  femalePlanFourthPhase({difficulty: 210, day: 65, title: '', phase: 5}),
  femalePlanFourthPhase({difficulty: 210, day: 66, title: '', phase: 5}),
  femalePlanFourthPhase({difficulty: 210, day: 67, title: '', phase: 5}),
  femalePlanFourthPhase({difficulty: 240, day: 68, title: '', phase: 5}),
  femalePlanFourthPhase({difficulty: 240, day: 69, title: '', phase: 5}),
  femalePlanFourthPhase({difficulty: 240, day: 70, title: '', phase: 5}),
  femalePlanFourthPhase({difficulty: 240, day: 71, title: '', phase: 5}),
  femalePlanFourthPhase({difficulty: 240, day: 72, title: '', phase: 5}),
  femalePlanFourthPhase({difficulty: 240, day: 73, title: '', phase: 5}),
  femalePlanFourthPhase({difficulty: 240, day: 74, title: '', phase: 5}),

  femalePlanSecondPhase({difficulty: 210, day: 61, title: '', phase: 6}),
  femalePlanSecondPhase({difficulty: 210, day: 62, title: '', phase: 6}),
  femalePlanSecondPhase({difficulty: 210, day: 63, title: '', phase: 6}),
  femalePlanSecondPhase({difficulty: 210, day: 64, title: '', phase: 6}),
  femalePlanSecondPhase({difficulty: 210, day: 65, title: '', phase: 6}),
  femalePlanSecondPhase({difficulty: 210, day: 66, title: '', phase: 6}),
  femalePlanSecondPhase({difficulty: 210, day: 67, title: '', phase: 6}),
  femalePlanSecondPhase({difficulty: 240, day: 68, title: '', phase: 6}),
  femalePlanSecondPhase({difficulty: 240, day: 69, title: '', phase: 6}),
  femalePlanSecondPhase({difficulty: 240, day: 70, title: '', phase: 6}),
  femalePlanSecondPhase({difficulty: 240, day: 71, title: '', phase: 6}),
  femalePlanSecondPhase({difficulty: 240, day: 72, title: '', phase: 6}),
  femalePlanSecondPhase({difficulty: 240, day: 73, title: '', phase: 6}),
  femalePlanSecondPhase({difficulty: 240, day: 74, title: '', phase: 6}),
];
