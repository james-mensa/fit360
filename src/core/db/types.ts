import Realm from 'realm';
//
//
import {
  DayPlanModel,
  LoginModel,
  PersonalizeModel,
  WorkoutModel,
} from './models';
import {BodyZonesTypes, GeneralProgressTy} from '@core/data-types';
export const ModelNames = {
  PersonalizeModel: 'PersonalizeModel',
  LoginModel: 'LoginModel',
  WorkoutModel: 'WorkoutModel',
  DayPlanModel: 'DayPlanModel',
} as const;

export type ModelName = (typeof ModelNames)[keyof typeof ModelNames];

export type PersonalizeModelTy = Omit<PersonalizeModel, keyof Realm.Object>;
export type PersonalizeModelMetaDataTy = Omit<PersonalizeModelTy, 'user_id'>;
export type LoginModelTy = Omit<LoginModel, keyof Realm.Object>;
export type LoginModelDataTy = Omit<LoginModelTy, 'user_id'>;
export type WorkoutModelTy = Omit<WorkoutModel, keyof Realm.Object>;
export type DayPlanModelTy = Omit<DayPlanModel, keyof Realm.Object>;
export interface LocalStore {
  getPersonalizedModel: (keyParam: {
    user_id?: string;
  }) => PersonalizeModelTy | undefined;
  getLoginData: () => LoginModelTy | undefined;
  setPersonalizedModel: (
    keyParam: {user_id?: string},
    Data: Omit<PersonalizeModelTy, 'user_id'>,
  ) => PersonalizeModelTy;
  setLoginData: (
    keyParam: {user_id?: string},
    Data: Omit<LoginModelTy, 'user_id'>,
  ) => LoginModelTy;
  AddDayPlan: () => void;
  getPlan: () => DayPlanModelTy[] | undefined;
  getUniquePlan: (_idx: number) => any;
  complete: (_id: string) => void;
  getProgressSummary: () => GeneralProgressTy | undefined;
  getDayProgressSummary: () => void;
  signOut: () => void;
}
export interface WorkoutTy {
  name: string;
  description: string;
  point: number;
  link: string;
  duration: number;
  completed: boolean;
  type?: BodyZonesTypes;
  path: string;
}

export interface DayTy {
  day: number;
  total: number;
  phase: number;
  completed: number;
  title: string;
  description?: string;
  burn_calories?: number;
  playlist: WorkoutTy[];
  diet?: {breakfast: string[]; lunch: string[]; dinner: string[]};
}

export interface PlanTy {
  title: string;
  description: string;
  exercise: DayTy[];
}
