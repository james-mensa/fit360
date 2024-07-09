import Realm, {UpdateMode} from 'realm';

import {LoginModel, PersonalizeModel} from './models';
import {LoginModelTy, ModelNames, PersonalizeModelTy} from './types';

// add/update personalized model

export function updatePersonalizeModel(
  realm: Realm,
  {user_id}: {user_id?: string},
  profile: Omit<PersonalizeModelTy, 'user_id'>,
) {
  const _user_id = user_id;
  const {user_name} = profile;
  const personlizedData = {...profile};

  console.log(
    '\n Profile created for  :  ',
    '\nURI         :',
    _user_id,
    `${user_name}`,
  );

  realm.write(() => {
    realm.create<PersonalizeModel>(
      ModelNames.PersonalizeModel,
      {
        ...personlizedData,
        user_id: _user_id,
      },
      UpdateMode.Modified,
    );
  });
  console.log('workss', user_id);
  const dbRecord = getPersonalizeModel(realm, {
    user_id: _user_id,
  }) as PersonalizeModelTy;

  console.log('\nUpdate Personalized data :  DB Record');

  return dbRecord;
}

export function getPersonalizeModel(
  realm: Realm,
  {user_id}: {user_id?: string},
) {
  const __user_id = user_id;
  return realm
    .objects<PersonalizeModel>(ModelNames.PersonalizeModel)
    .filtered('user_id == $0', __user_id)
    .at(0);
}

export function userLogin(
  realm: Realm,
  {user_id}: {user_id?: string},
  profile: Omit<LoginModelTy, 'user_id'>,
) {
  const _user_id = user_id;
  const {user_name} = profile;
  const personlizedData = {...profile};

  console.log(
    '\n Profile created for  :  ',
    '\nURI         :',
    _user_id,
    `${user_name}`,
    JSON.stringify(personlizedData),
  );

  try {
    realm.write(() => {
      realm.create<LoginModel>(
        ModelNames.LoginModel,
        {
          ...personlizedData,
          user_id: _user_id,
        },
        UpdateMode.Modified,
      );
    });

    const dbRecord = getPersonalizeModel(realm, {
      user_id: _user_id,
    }) as PersonalizeModelTy;

    console.log('\nUpdate Personalized data :  DB Record');

    return dbRecord;
  } catch (err) {
    console.log('Error in userLogin', err);
    throw err;
  }
}

export function getLoginCredentials(realm: Realm) {
  return realm.objects<LoginModel>(ModelNames.LoginModel).at(0);
}

export function generateUserId(user_name: string): string {
  const randomNumber = Math.floor(10000 + Math.random() * 90000);
  const userId = `${user_name}${randomNumber}`;
  return userId;
}
