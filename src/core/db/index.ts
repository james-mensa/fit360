import Realm from 'realm';
import {useEffect, useState} from 'react';
import {createRealmContext} from '@realm/react';
//
//
import {PersonalizeModel} from './models';
import {
  LocalStore as __LocalStore,
  PersonalizeModelTy as __PersonalizeModelTy,
} from './types';
import {updatePersonalizeModel, getPersonalizeModel} from './common';

export type PersonalizeModelTy = __PersonalizeModelTy;

export type LocalStore = __LocalStore;

const realmConfig: Realm.Configuration = {
  schema: [PersonalizeModel],
  schemaVersion: 1,
};

const {RealmProvider, useRealm, useObject, useQuery} =
  createRealmContext(realmConfig);

function useLocalStore(): LocalStore {
  const realm = useRealm();

  return {
    getResourceCache: (keyParam: {uriHash?: string; uri?: string}) =>
      getPersonalizeModel(realm, keyParam),
    setResourceCache: (
      keyParam: {uriHash?: string; uri?: string},
      webData: Omit<PersonalizeModelTy, 'uriHash' | 'uri'>,
    ) => updatePersonalizeModel(realm, keyParam, webData),
  };
}

export {RealmProvider, useRealm, useQuery, useObject, useLocalStore};
