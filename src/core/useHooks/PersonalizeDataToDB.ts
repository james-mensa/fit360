import {LocalStoreKeys} from '../data-types';
import {convertStringToArray, getLocalResponse} from '../utils';
import {generateUserId} from '@core/db/common';
import {PersonalizeModelMetaDataTy} from '@core/db/types';

export default async function personalizeDataToDb(): Promise<{
  data: PersonalizeModelMetaDataTy;
  user_id: string;
}> {
  const gender = await getLocalResponse(LocalStoreKeys.Gender);
  const interest_local = await getLocalResponse(LocalStoreKeys.FitnessIntrest);
  let interest: string[] = [];
  if (interest_local) {
    interest = convertStringToArray(interest_local);
  }
  const body_type = await getLocalResponse(LocalStoreKeys.BodyType);
  const target_body_type = await getLocalResponse(LocalStoreKeys.BodyTarget);
  let target_body_zones: string[] = [];
  const target_body_zones_local = await getLocalResponse(
    LocalStoreKeys.TargetBodyZones,
  );
  if (target_body_zones_local) {
    target_body_zones = convertStringToArray(target_body_zones_local);
  }
  const workout_per_week = await getLocalResponse(
    LocalStoreKeys.WorkoutTimePerWeek,
  );
  const fitness_level = await getLocalResponse(LocalStoreKeys.FitnessLevel);
  const working_hours = await getLocalResponse(LocalStoreKeys.SitLongHours);
  const walking_per_day = await getLocalResponse(
    LocalStoreKeys.WalkingTimePerDay,
  );
  const sleep_hours_per_day = await getLocalResponse(
    LocalStoreKeys.SleepTimePerDay,
  );
  const water_consumption = await getLocalResponse(
    LocalStoreKeys.WaterConsumption,
  );

  const bad_habits_local = await getLocalResponse(LocalStoreKeys.Badhabits);
  let bad_habits: string[] = [];
  if (bad_habits_local) {
    bad_habits = convertStringToArray(bad_habits_local);
  }
  const user_name = await getLocalResponse(LocalStoreKeys.UserName);
  const user_age = await getLocalResponse(LocalStoreKeys.UserAge);
  const user_image_url = await getLocalResponse(LocalStoreKeys.UserImage);
  const user_id = generateUserId(user_name!);
  const Data = {
    gender: gender ?? '',
    interest: interest ?? [],
    body_type: body_type ?? '',
    target_body_type: target_body_type ?? '',
    target_body_zones,
    workout_per_week: workout_per_week ?? '',
    fitness_level: fitness_level ?? '',
    working_hours: working_hours ?? '',
    walking_per_day: walking_per_day ?? '',
    sleep_hours_per_day: sleep_hours_per_day ?? '',
    water_consumption: water_consumption ?? '',
    bad_habits: bad_habits ?? '',
    user_id: user_id ?? '',
    user_name: user_name ?? '',
    user_image_url: user_image_url ?? '',
    user_age: user_age ?? '',
  };
  return {data: Data, user_id: user_id};
}
