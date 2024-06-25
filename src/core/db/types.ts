import Realm from 'realm';
//
//
import {PersonalizeModel} from './models';

export const ModelNames = {
  PersonalizeModel: 'PersonalizeModel',
};

export type PersonalizeModelTy = Omit<PersonalizeModel, keyof Realm.Object>;
export type PersonalizeModelMetaDataTy = Omit<
  PersonalizeModelTy,
  'uri' | 'base64Data'
>;

export interface LocalStore {
  getResourceCache: (keyParam: {
    uriHash?: string;
    uri?: string;
  }) => PersonalizeModelTy | undefined;
  setResourceCache: (
    keyParam: {uriHash?: string; uri?: string},
    webData: Omit<PersonalizeModelTy, 'uriHash' | 'uri'>,
  ) => PersonalizeModelTy;
}
