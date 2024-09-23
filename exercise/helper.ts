import {BodyZonesTypes} from '@core/data-types';
import {WorkoutTy} from '@core/db/types';

const AVERAGE_CALORIES_BURNED_PER_MINUTE_BY_ZONE: Record<
  BodyZonesTypes,
  number
> = {
  [BodyZonesTypes.neck]: 5,
  [BodyZonesTypes.forearms]: 6,
  [BodyZonesTypes.belly]: 7,
  [BodyZonesTypes.back]: 8,
  [BodyZonesTypes.legs]: 9,
  [BodyZonesTypes.pecs]: 7,
  [BodyZonesTypes.thighs]: 9,
  [BodyZonesTypes.triceps]: 6,
  [BodyZonesTypes.biceps]: 6,
  [BodyZonesTypes.shoulder]: 7,
  [BodyZonesTypes.skinny]: 5, // Assuming 'skinny' is a general zone with lower burn
};
export const calculateCaloriesBurned = (exercises: WorkoutTy[]): number => {
  return exercises.reduce((total, exercise) => {
    const caloriesPerMinute =
      AVERAGE_CALORIES_BURNED_PER_MINUTE_BY_ZONE[
        exercise.type as BodyZonesTypes
      ] || 7;
    const durationInMinutes = exercise.duration / 60; // Convert seconds to minutes
    const exerciseCalories = durationInMinutes * caloriesPerMinute;
    return total + exerciseCalories;
  }, 0);
};
