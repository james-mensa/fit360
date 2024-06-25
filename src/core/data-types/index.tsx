export interface StatusProps {
  id: string | number;
  title: string;
  rate: string | number;
  icon: string;
  unit: string;
  status: string;
}

export const LocalStoreKeys = {
  BodyType: 'body_type',
} as const;

export type LocalStoreKeys =
  (typeof LocalStoreKeys)[keyof typeof LocalStoreKeys];

export const BodyZonesTypes = {
  Neck: 'Feck',
  Forearms: 'forearms',
  Belly: 'belly',
  Back: 'back',
  Legs: 'legs',
  Pecs: 'pecs',
  Thighs: 'inner and front thighs',
  Triceps: 'triceps',
  Biceps: 'bisceps',
} as const;
export type BodyZonesTypes =
  (typeof BodyZonesTypes)[keyof typeof BodyZonesTypes];

export const WorkOutPerWeekType = {
  None: 'none',
  OneOrTwo: '1 or 2 days',
  Two: '2 days',
  Three: '3 days',
  ThreeToFour: '3 to 4 days',
  Four: '4 days',
  FourToFive: '4 to 5 days',
  FiveToSix: '5 to 6 days',
  Six: '6 days',
  SixToSeven: 'more than 6 days',
} as const;
export type WorkOutPerWeekType =
  (typeof WorkOutPerWeekType)[keyof typeof WorkOutPerWeekType];

export const FitnessLevelTypes = {
  Beginner: 'beginner',
  Intermediate: 'intermediate',
  Advanced: 'advanced',
} as const;
export type FitnessLevelTypes =
  (typeof FitnessLevelTypes)[keyof typeof FitnessLevelTypes];

export const WorkingHourResponseType = {
  Yes: 'yes',
  No: 'no',
} as const;
export type WorkingHourResponseType =
  (typeof WorkingHourResponseType)[keyof typeof WorkingHourResponseType];

export const WalkingDurationType = {
  LessTheTenMinutes: 'Less the 10 minutes',
  TenToTwenty: '10 to 20  minutes',
  TwentyToFourty: '20 to 40 minutes',
  FourtyToOneHour: '40 minutes to 1 hour',
  OneToTwoHours: '1 to 2 hours',
  MoreThanTwoHours: 'more than 2 hours',
} as const;
export type WalkingDurationType =
  (typeof WalkingDurationType)[keyof typeof WalkingDurationType];

export const SleepTimeTypes = {
  LessThenFourHours: 'Less the 4 hours',
  FourTwoSixHours: '4 to 6  hours',
  SixToSevenHours: '6 to 7 hours',
  SevenToEightHours: '7 to 8 hours (recommanded)',
  MoreThanEight: 'more than 8 hours',
} as const;
export type SleepTimeTypes =
  (typeof SleepTimeTypes)[keyof typeof SleepTimeTypes];
