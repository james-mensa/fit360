import Realm from 'realm';
import {createRealmContext} from '@realm/react';
//
//
import {
  PersonalizeModel,
  LoginModel,
  WorkoutModel,
  DayPlanModel,
} from './models';
import {
  LocalStore as __LocalStore,
  PersonalizeModelTy as __PersonalizeModelTy,
  LoginModelTy as __LoginModelTy,
  WorkoutModelTy as __WorkoutModelTy,
  DayPlanModelTy as _DayPlanModelTy,
} from './types';
import {
  updatePersonalizeModel,
  getPersonalizeModel,
  getLoginCredentials,
  userLogin,
  AddDayPlan,
  getPlan,
} from './common';

export type PersonalizeModelTy = __PersonalizeModelTy;
export type LoginModelTy = __LoginModelTy;
export type LocalStore = __LocalStore;
export type WorkoutModelTy = __WorkoutModelTy;
export type DayPlanModelTy = _DayPlanModelTy;

const realmConfig: Realm.Configuration = {
  schema: [PersonalizeModel, LoginModel, WorkoutModel, DayPlanModel],
  schemaVersion: 1,
};

const {RealmProvider, useRealm, useObject, useQuery} =
  createRealmContext(realmConfig);

function useLocalStore(): LocalStore {
  const realm = useRealm();

  return {
    getPersonalizedModel: (keyParam: {user_id?: string}) =>
      getPersonalizeModel(realm, keyParam),
    setPersonalizedModel: (
      keyParam: {user_id?: string},
      Data: Omit<PersonalizeModelTy, 'user_id'>,
    ) => updatePersonalizeModel(realm, keyParam, Data),

    getLoginData: () => getLoginCredentials(realm),
    setLoginData: (
      keyParam: {user_id?: string},
      Data: Omit<LoginModelTy, 'user_id'>,
    ) => userLogin(realm, keyParam, Data),
    AddDayPlan: () => AddDayPlan(realm),
    // addPlaylist: (Data: WorkoutModelTy[]) => AddWorkoutToDayPlan(realm, Data),
    getPlan: () => getPlan(realm),
  };
}

export {RealmProvider, useRealm, useQuery, useObject, useLocalStore};
