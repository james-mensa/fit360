export interface StatusProps {
  id: string | number;
  title: string;
  rate: string | number;
  icon: string;
  unit: string;
  status: string;
}

export type GenderType = 'female' | 'male';
export const LocalStoreKeys = {
  Gender: 'gender',
  FitnessIntrest: 'fitness_intrest',
  BodyType: 'body_type',
  BodyTarget: 'body_target',
  TargetBodyZones: 'target_body_zones',
  WorkoutTimePerWeek: 'workout_time_per_week',
  FitnessLevel: 'fitness_level',
  SitLongHours: 'sit_longer_hours',
  WalkingTimePerDay: 'walking_time_per_day',
  SleepTimePerDay: 'sleep_time_per_day',
  WaterConsumption: 'water_consumption',
  Badhabits: 'bad_habits',
  UserName: 'user_name',
  UserImage: 'user_image',
  UserAge: 'user_age',
} as const;

export type LocalStoreKey =
  (typeof LocalStoreKeys)[keyof typeof LocalStoreKeys];

export const TargetBodyTypes = {
  skinny: 'skinny',
  cut: 'cut',
  bulk: 'bulk',
  mascular: 'mascular man',
  normal: 'normal',
} as const;
export type TargetBodyType =
  (typeof TargetBodyTypes)[keyof typeof TargetBodyTypes];

export type BodyZonesAnyTypes =
  | 'neck'
  | 'forearms'
  | 'belly'
  | 'back'
  | 'legs'
  | 'pecs'
  | 'thighs'
  | 'triceps'
  | 'biceps'
  | 'shoulder'
  | 'skinny';
export const BodyZonesTypes = {
  neck: 'neck',
  forearms: 'forearms',
  belly: 'belly',
  back: 'back',
  legs: 'legs',
  pecs: 'pecs',
  thighs: 'thighs',
  triceps: 'triceps',
  biceps: 'biceps',
  shoulder: 'shoulder',
  skinny: 'skinny',
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

export const WaterConsumptionTypes = {
  LessThenTwoGlasses: 'Less than 2 glasses of water',
  TwoToFiveGlasses: '2 to 5  glasses of water',
  SixToTenGlasses: '6 to 10 glasses of water',
  MoreThanTenGlasses: 'more than 10 glasses of water',
} as const;
export type WaterConsumptionType =
  (typeof WaterConsumptionTypes)[keyof typeof WaterConsumptionTypes];

export const BadHabitsTypes = {
  Soda: 'soda',
  SweetenedFruitJuices: 'sweetened fruit juices',
  EnergyDrinks: 'energy drinks',
  FriedChicken: 'fried chicken',
  IceCream: 'ice cream',
  Pepperoni: 'pepperoni',
  SweetenedYogurt: 'sweetened yogurt',
  Noodles: 'noodles',
  Sausages: 'sausages',
  Burgers: 'burgers',
} as const;
export type BadHabitsType =
  (typeof BadHabitsTypes)[keyof typeof BadHabitsTypes];

export interface PhaseProgress {
  total: number;
  completed: number;
  progress: number;
  calories: number;
}

export interface collectTy {
  workout: {
    total: number;
    completed: number;
  };
  calories: number;
}
export interface DayProgressTy {
  label: string[];
  data: Map<string, collectTy>;
}
export interface GeneralProgress {
  phase1: PhaseProgress;
  phase2: PhaseProgress;
  phase3: PhaseProgress;
  phase4: PhaseProgress;
  phase5: PhaseProgress;
  phase6: PhaseProgress;
}
export interface GeneralProgressTy {
  general: {
    phase1: PhaseProgress;
    phase2: PhaseProgress;
    phase3: PhaseProgress;
    phase4: PhaseProgress;
    phase5: PhaseProgress;
    phase6: PhaseProgress;
  };
  day: DayProgressTy;
}
