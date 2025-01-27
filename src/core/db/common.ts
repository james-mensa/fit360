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
import AsyncStorageService from '@core/local/AsyncStorageService';

// add/update personalized model

export function updatePersonalizeModel(
  realm: Realm,
  {user_id}: {user_id?: string},
  profile: Omit<PersonalizeModelTy, 'user_id'>,
) {
  const _user_id = user_id;
  const personlizedData = {...profile};

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

  const dbRecord = getPersonalizeModel(realm, {
    user_id: _user_id,
  }) as PersonalizeModelTy;
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
  const personlizedData = {...profile};

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
  return dbRecord;
}

export function getLoginCredentials(realm: Realm) {
  return realm.objects<LoginModel>(ModelNames.LoginModel).at(0);
}

//handle user sign out

export async function signOut(realm: Realm) {
  try {
    realm.write(() => {
      // Delete login record
      const loginRecord = getLoginCredentials(realm);
      if (loginRecord) {
        realm.delete(loginRecord);
        console.log('User signed out successfully');
      } else {
        console.log('No user found to sign out');
      }

      // Clear all user-related records
      const modelsToDelete = [
        ModelNames.DayPlanModel,
        ModelNames.WorkoutModel,
        ModelNames.PersonalizeModel,
      ];

      modelsToDelete.forEach(modelName => {
        const records = realm.objects(modelName);
        if (records.length > 0) {
          realm.delete(records);
          console.log(`All records deleted successfully for ${modelName}`);
        } else {
          console.log(`No records found to delete for ${modelName}`);
        }
      });
    });
    await AsyncStorageService.removeAllData();
  } catch (error) {
    console.error('Error signing out:', error);
  }
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
  const personalizeDataToDb = createUserModel(
    userData as PersonalizeModelMetaDataTy,
  );
  for (const exercise of personalizeDataToDb) {
    const _data: DayPlanModelTy = {
      day: exercise.day,
      total: exercise.total,
      completed: exercise.completed,
      title: exercise.title,
      phase: exercise.phase,
      description: exercise.description,
      diet: JSON.stringify(exercise.diet),
      burn_calories: exercise.burn_calories
        ? Math.round(exercise.burn_calories)
        : 20,
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
    AddWorkoutToDayPlan(realm, _id, exercise.playlist);
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
    } catch (err) {}
    const _WorkoutModel = getWorkOutModel(realm, _id);
    const _planModel = getDayPlanModel(realm, model_id);
    if (_WorkoutModel && _planModel) {
      realm.write(() => {
        _planModel.playlist.push(_WorkoutModel);
      });
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
  const response = realm.objects<DayPlanModel>(ModelNames.DayPlanModel);
  const incompleteTasks = response.filter(
    task => task.completed < task.playlist.length,
  );
  // Step 2: Sort the filtered array by the day property
  incompleteTasks.sort((a, b) => a.day - b.day);
  // Step 3: Find the minimum day value
  const minDay = incompleteTasks[0]?.day;

  // Step 4: Filter the tasks to include only those with the minimum day value
  const smallestDayTasks = incompleteTasks.filter(task => task.day === minDay);
  const day = smallestDayTasks[0]?.day;
  return response.filter(task => task.day === day);
}

export function getUniquePlan(realm: Realm, idx: number) {
  const response = realm
    .objects<DayPlanModel>(ModelNames.DayPlanModel)
    .filtered('day == $0', idx);
  return response;
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
}
