import {useLocalStore, WorkoutModelTy} from '@core/db';
import {DayPlanModelTy, PersonalizeModelTy} from '@core/db/types';
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
interface ProviderProps {
  plan: DayPlanModelTy[];
  user: PersonalizeModelTy | undefined;
  playList: WorkoutModelTy[];
  setPlayList: Dispatch<SetStateAction<WorkoutModelTy[]>>;
  getFirstIncompleteExercise: () => WorkoutModelTy | undefined;
  setPlans: Dispatch<SetStateAction<DayPlanModelTy[]>>;
  complete: (_id: string) => void;
  isLastExercise: (_id: string) => boolean;
  isFirstExercise: (_id: string) => boolean;
  hasNextIncompleteExercise: () => boolean;
  hasNextExercise: (_id: string) => boolean;
  hasPreviousExercise: (_id: string) => boolean;
}
const ProviderContext = createContext<ProviderProps | undefined>(undefined);
export const AppProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const LocalStore = useLocalStore();
  const [user, setUser] = useState<PersonalizeModelTy>();
  const [plan, setPlans] = useState<DayPlanModelTy[]>([]);
  const [playList, setPlayList] = useState<WorkoutModelTy[]>([]);

  useEffect(() => {
    const response = LocalStore.getPlan();
    if (response) {
      setPlans(response);
    }
    const __user = LocalStore.getLoginData();
    if (__user) {
      const userData = LocalStore.getPersonalizedModel(__user);
      if (userData) {
        setUser(userData);
      }
    }
  }, []);
  function getFirstIncompleteExercise(): WorkoutModelTy | undefined {
    return playList.find(exercise => !exercise.completed);
  }

  function isLastExercise(exerciseId: string): boolean {
    const lastExercise = playList[playList.length - 1];
    return lastExercise._id === exerciseId;
  }
  function isFirstExercise(exerciseId: string): boolean {
    const index = playList.findIndex(exercise => exercise._id === exerciseId);
    // Check if the exercise is found and if it is the first exercise
    return index === 0;
  }

  function hasNextIncompleteExercise(): boolean {
    const __playList = playList.find(exercise => !exercise.completed);
    return __playList !== undefined;
  }
  function hasNextExercise(exerciseId: string): boolean {
    const index = playList.findIndex(exercise => exercise._id === exerciseId);
    return index !== -1 && index < playList.length - 1;
  }
  function hasPreviousExercise(exerciseId: string): boolean {
    const index = playList.findIndex(exercise => exercise._id === exerciseId);
    // Check if the exercise is found and if there is an exercise before it
    return index > 0;
  }

  function complete(_id: string) {
    LocalStore.complete(_id);
  }

  return (
    <ProviderContext.Provider
      value={{
        user,
        plan,
        setPlans,
        playList,
        setPlayList,
        getFirstIncompleteExercise,
        complete,
        isLastExercise,
        isFirstExercise,
        hasNextIncompleteExercise,
        hasNextExercise,
        hasPreviousExercise,
      }}>
      {children}
    </ProviderContext.Provider>
  );
};

/**
 * Custom hook to use the AppProvider.
 *
 * @returns {ProviderProps} The context value.
 * @throws {Error} If the hook is used outside of a FaucetProvider.
 */
export const useProvider = (): ProviderProps => {
  const context = useContext(ProviderContext);

  if (context === undefined) {
    throw new Error('useFaucetContext must be used within a FaucetProvider');
  }

  return context;
};
