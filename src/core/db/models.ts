import Realm from 'realm';

/**
 * Model for personalizing user fitness preferences and habits.
 */
export class PersonalizeModel extends Realm.Object<PersonalizeModel> {
  gender!: string;
  interest!: string[];
  body_type!: string;
  target_body_type!: string;
  target_body_zones!: string[];
  workout_per_week!: string;
  fitness_level!: string;
  working_hours!: string;
  walking_per_day!: string;
  sleep_hours_per_day!: string;
  water_consumption!: string;
  bad_habits!: string[];
  user_id!: string;
  user_name!: string;
  user_image_url!: string;
  user_age!: string;

  /**
   * The schema definition for the PersonalizeModel.
   */
  static schema: Realm.ObjectSchema = {
    name: 'PersonalizeModel',
    primaryKey: 'user_id',
    properties: {
      user_id: 'string',
      bad_habits: 'string[]',
      water_consumption: 'string',
      sleep_hours_per_day: 'string',
      walking_per_day: 'string',
      working_hours: 'string',
      fitness_level: 'string',
      workout_per_week: 'string',
      target_body_zones: 'string[]',
      target_body_type: 'string',
      body_type: 'string',
      interest: 'string[]',
      gender: 'string',
      user_name: 'string',
      user_image_url: 'string',
      user_age: 'string',
    },
  };
}

export class LoginModel extends Realm.Object<LoginModel> {
  user_id!: string;
  user_name!: string;

  /**
   * The schema definition for the LoginModel.
   */
  static schema: Realm.ObjectSchema = {
    name: 'LoginModel',
    primaryKey: 'user_id',
    properties: {
      user_id: 'string',
      user_name: 'string',
    },
  };
}
export {PersonalizeModel as default};
