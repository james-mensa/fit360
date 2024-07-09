import Realm from 'realm';
//
//
import {LoginModel, PersonalizeModel} from './models';

export const ModelNames = {
  PersonalizeModel: 'PersonalizeModel',
  LoginModel: 'LoginModel',
};

export type PersonalizeModelTy = Omit<PersonalizeModel, keyof Realm.Object>;
export type PersonalizeModelMetaDataTy = Omit<PersonalizeModelTy, 'user_id'>;

export type LoginModelTy = Omit<LoginModel, keyof Realm.Object>;
export type LoginModelDataTy = Omit<LoginModelTy, 'user_id'>;

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
  ) => PersonalizeModelTy;
}
