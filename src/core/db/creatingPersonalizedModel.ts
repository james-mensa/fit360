import {femaleBicepsExercise} from '@core/useHooks/exercise/bisceps/female';
import {DayTy, PersonalizeModelMetaDataTy} from './types';
import {femaleBackExercise} from '@core/useHooks/exercise/back/female';
import {femaleForearmsExercise} from '@core/useHooks/exercise/forearms/female';
import {femaleLegsExercise} from '@core/useHooks/exercise/legs/female';
import {femaleNeckExercise} from '@core/useHooks/exercise/neck/female';
import {femaleBellyExercise} from '@core/useHooks/exercise/belly/female';
import {femaleSkinnyExercise} from '@core/useHooks/exercise/skinny/female';
import {femaleThighsPlan} from '@core/useHooks/exercise/thights/female';
import {femaleTricepsExercise} from '@core/useHooks/exercise/triceps/female';
import {BodyZonesTypes} from '@core/data-types';

import {maleSkinnyExercise} from '@core/useHooks/exercise/skinny/male';
import {maleBackExercise} from '@core/useHooks/exercise/back/male';
import {maleNeckExercise} from '@core/useHooks/exercise/neck/male';
import {maleForearmsExercise} from '@core/useHooks/exercise/forearms/male';
import {maleBellyExercise} from '@core/useHooks/exercise/belly/male';
import {maleLegsExercise} from '@core/useHooks/exercise/legs/male';
import {malePecsExercise} from '@core/useHooks/exercise/pecs/male';
import {maleTricepsExercise} from '@core/useHooks/exercise/triceps/male';
import {maleBiscepsExercise} from '@core/useHooks/exercise/bisceps/male';
import {maleShoulderExercise} from '@core/useHooks/exercise/shoulder/male';
const exercisePlans: {
  [key in keyof typeof BodyZonesTypes]: {male: DayTy[]; female: DayTy[]};
} = {
  Neck: {male: maleNeckExercise, female: femaleNeckExercise},
  Forearms: {male: maleForearmsExercise, female: femaleForearmsExercise},
  Belly: {male: maleBellyExercise, female: femaleBellyExercise},
  Back: {male: maleBackExercise, female: femaleBackExercise},
  Legs: {male: maleLegsExercise, female: femaleLegsExercise},
  Pecs: {male: malePecsExercise, female: []},
  Thighs: {male: [], female: femaleThighsPlan},
  Triceps: {male: maleTricepsExercise, female: femaleTricepsExercise},
  Biceps: {male: maleBiscepsExercise, female: femaleBicepsExercise},
  Shoulder: {male: maleShoulderExercise, female: []},
  Skinny: {male: maleSkinnyExercise, female: femaleSkinnyExercise},
};

export function createUserModel(data: PersonalizeModelMetaDataTy): DayTy[] {
  const {
    body_type,
    target_body_type,
    fitness_level,
    gender,
    target_body_zones,
  } = data;
  const determinate = {
    bodyType: body_type,
    targetBodyType: target_body_type,
    fitnessLevel: fitness_level,
    targetBodyZone: target_body_zones,
    gender,
  };
  console.log('Creating user model: ', determinate);

  const genderKey = gender === 'female' ? 'female' : 'male';
  let selectedPlan: DayTy[] = [];

  target_body_zones.forEach(zone => {
    const plan =
      exercisePlans[zone as keyof typeof BodyZonesTypes]?.[genderKey];
    if (plan) {
      selectedPlan = selectedPlan.concat(plan);
    }
  });

  // Ensure Skinny plan is prioritized if selected
  if (target_body_type === BodyZonesTypes.Skinny) {
    selectedPlan =
      gender === 'female' ? femaleSkinnyExercise : [maleSkinnyExercise];
  }

  return selectedPlan;
}
