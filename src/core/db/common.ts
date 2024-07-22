import Realm, {UpdateMode} from 'realm';

import {
  DayPlanModel,
  LoginModel,
  PersonalizeModel,
  WorkoutModel,
} from './models';
import {
  LoginModelTy,
  ModelNames,
  PersonalizeModelTy,
  WorkoutTy,
  WorkoutModelTy,
  PersonalizeModelMetaDataTy,
} from './types';
import {DayPlanModelTy} from '.';
import {generateId} from '@core/utils';

import {createUserModel} from './creatingPersonalizedModel';

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

  console.log('\n User:', `${user_name}`, 'signed in successfully');

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

  const dbRecord = getLoginCredentials(realm) as LoginModelTy;

  console.log('\n LOGIN details', JSON.stringify(dbRecord));

  return dbRecord;
}

export function getLoginCredentials(realm: Realm) {
  return realm.objects<LoginModel>(ModelNames.LoginModel).at(0);
}

export function generateUserId(user_name: string): string {
  const randomNumber = Math.floor(10000 + Math.random() * 90000);
  const userId = `${user_name}${randomNumber}`;
  return userId;
}

export function AddDayPlan(realm: Realm) {
  const signed_user = getLoginCredentials(realm);
  if (!signed_user) {
    return;
  }

  const userData = getPersonalizeModel(realm, {user_id: signed_user.user_id});
  console.log({userData});
  const personalizeDataToDb = createUserModel(
    userData as PersonalizeModelMetaDataTy,
  );
  console.log({datasss: personalizeDataToDb});
  for (const exercise of personalizeDataToDb) {
    console.log('Creating skin', {
      planLength: personalizeDataToDb.length,
    });
    const _data: DayPlanModelTy = {
      day: exercise.day,
      total: exercise.total,
      completed: exercise.completed,
      title: exercise.title,
      phase: exercise.phase,
      description: exercise.description,
      playlist: [] as unknown as Realm.List<WorkoutModel>,
      _id: generateId(),
    };
    const _id = _data._id;
    realm.write(() => {
      realm.create<DayPlanModel>(
        ModelNames.DayPlanModel,
        {
          ..._data,
        },
        UpdateMode.Modified,
      );
    });
    console.log('add playlist');
    AddWorkoutToDayPlan(realm, _id, exercise.playlist);
  }

  const dbRecord = getPlan(realm);
  console.log({dbRecord});
  if (dbRecord) {
    return dbRecord;
  }
}

function AddWorkoutToDayPlan(
  realm: Realm,
  model_id: string,
  Data: WorkoutTy[],
) {
  for (const instruction of Data) {
    const _id = generateId();
    const _workoutData: WorkoutModelTy = {
      ...instruction,
      _id,
      completed: false,
    };

    try {
      realm.write(() => {
        realm.create<WorkoutModel>(
          ModelNames.WorkoutModel,
          {
            ..._workoutData,
          },
          UpdateMode.Modified,
        );
      });
    } catch (err) {
      console.log('add workout to playlist', err);
    }
    const _WorkoutModel = getWorkOutModel(realm, _id);
    const _planModel = getDayPlanModel(realm, model_id);
    if (_WorkoutModel && _planModel) {
      realm.write(() => {
        _planModel.playlist.push(_WorkoutModel);
      });
      completeWorkout(realm, _id);
    }
  }
}

export function getDayPlan(realm: Realm, {_id}: {_id: string}) {
  return realm
    .objects<DayPlanModel>(ModelNames.DayPlanModel)
    .filtered('_id == $0', _id)
    .at(0);
}
export function getPlan(realm: Realm) {
  return realm.objects<DayPlanModel>(ModelNames.DayPlanModel);
}

export function getWorkOut(realm: Realm, {_id}: {_id: string}) {
  return realm
    .objects<WorkoutModel>(ModelNames.WorkoutModel)
    .filtered('_id == $0', _id)
    .at(0);
}
function getWorkOutModel(realm: Realm, _id: string): WorkoutModel | null {
  return realm.objectForPrimaryKey(WorkoutModel, _id);
}

// Function to get the DayPlanModel by _id
function getDayPlanModel(realm: Realm, _id: string): DayPlanModel | null {
  return realm.objectForPrimaryKey(DayPlanModel, _id);
}

export function completeWorkout(realm: Realm, _id: string) {
  const _WorkoutModel = getWorkOutModel(realm, _id);

  if (_WorkoutModel) {
    realm.write(() => {
      _WorkoutModel.completed = true;
    });
    if (_WorkoutModel.dayPlan && _WorkoutModel.dayPlan.length > 0) {
      const plan_id = _WorkoutModel.dayPlan[0]._id;
      const _planModel = getDayPlanModel(realm, plan_id);

      if (_planModel) {
        if (_planModel.total > _planModel.completed) {
          const _completed = _planModel.completed + 1;

          realm.write(() => {
            _planModel.completed = _completed;
          });
        }
      }
    } else {
      console.log('No dayPlan associated with this workout');
    }
  }

  console.log('workoutUpdated');
}
