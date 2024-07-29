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
  return (
    <ProviderContext.Provider
      value={{
        user,
        plan,
        setPlans,
        playList,
        setPlayList,
        getFirstIncompleteExercise,
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
