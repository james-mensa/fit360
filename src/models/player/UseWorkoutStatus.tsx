import {useState, useEffect, useCallback, useMemo} from 'react';
import {WorkoutModelTy} from '@core/db';
import {useProvider} from '@store/provider';
import {bodyZones} from '@assets/register';
import {BodyZonesTypes} from '@core/data-types';
const useWorkoutStatus = (currentWorkout: WorkoutModelTy | undefined) => {
  const [workout, setWorkout] = useState<WorkoutModelTy | undefined>(
    currentWorkout,
  );
  const {playList, user} = useProvider();
  const getFirstWorkout = useCallback(() => playList[0], [playList]);
  useEffect(() => {
    if (!workout) {
      const firstWorkout = getFirstWorkout();
      setWorkout(firstWorkout);
    }
  }, [workout, getFirstWorkout]);

  const path = workout ? workout.path : 'belly';
  const gender = user ? user.gender : 'female';
  const instruction = useMemo(
    () => bodyZones[path as BodyZonesTypes][gender][workout?.link],
    [path, gender, workout],
  );

  function nextExercise() {
    const index = playList.findIndex(exercise => exercise._id === workout?._id);
    // Check if the exercise is found and if there is an exercise after it
    if (index !== -1 && index < playList.length - 1) {
      setWorkout(playList[index + 1]);
    }
  }
  function previousExercise() {
    const index = playList.findIndex(exercise => exercise._id === workout?._id);

    // Check if the exercise is found and if there is a previous exercise
    if (index > 0) {
      setWorkout(playList[index - 1]);
    }
  }
  return {workout, instruction, nextExercise, previousExercise};
};

export default useWorkoutStatus;
