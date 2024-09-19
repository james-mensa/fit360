import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import {GeneralProgressTy} from '@core/data-types';
import {useLocalStore, WorkoutModelTy} from '@core/db';
import {DayPlanModelTy, PersonalizeModelTy} from '@core/db/types';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

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
  progressSummary: GeneralProgressTy | undefined;
  setProgressSummary: Dispatch<
    React.SetStateAction<GeneralProgressTy | undefined>
  >;
  getDayChallenge: (_idx: number) => DayPlanModelTy[] | undefined;
  refreshUser: () => void;
  isLogin: boolean | null;
  login: () => void;
  logout: () => void;
  setLogin: () => void;
}

const ProviderContext = createContext<ProviderProps | undefined>(undefined);

export const AppProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const localStore = useLocalStore();
  const [user, setUser] = useState<PersonalizeModelTy>();
  const [plan, setPlans] = useState<DayPlanModelTy[]>([]);
  const [playList, setPlayList] = useState<WorkoutModelTy[]>([]);
  const [isLogin, setIsLogin] = useState<boolean | null>(null);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const [progressSummary, setProgressSummary] = useState<
    GeneralProgressTy | undefined
  >();

  useEffect(() => {
    const savedPlan = localStore.getPlan();
    if (savedPlan) {
      setPlans(savedPlan);
    }
    const savedUser = localStore.getLoginData();
    if (savedUser) {
      const personalizedData = localStore.getPersonalizedModel(savedUser);
      if (personalizedData) {
        setUser(personalizedData);
      }
    }
  }, [localStore]);

  const refreshUser = () => {
    const savedPlan = localStore.getPlan();
    if (savedPlan) {
      setPlans(savedPlan);
    }
    const savedUser = localStore.getLoginData();
    if (savedUser) {
      const personalizedData = localStore.getPersonalizedModel(savedUser);
      if (personalizedData) {
        setUser(personalizedData);
      }
    }
  };

  useEffect(() => {
    async function saveToStorage() {
      const signed_user = localStore.getLoginData();
      if (signed_user?.user_id) {
        setIsLogin(true);
        return;
      } else {
        setIsLogin(false);
      }
    }
    saveToStorage();
  }, [isLogin, localStore]);

  const setLogin = () => {
    const signed_user = localStore.getLoginData();
    if (signed_user?.user_id) {
      setIsLogin(true);
      return;
    } else {
      setIsLogin(false);
    }
  };
  const login = () => {
    setIsLogin(true);
  };
  const logout = () => {
    setIsLogin(false);

    // Navigate to onboarding screen and reset navigation stack
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'onboarding'}],
      });
      localStore.signOut();
    }, 2000);
  };

  useEffect(() => {
    const savedProgress = localStore.getProgressSummary();
    if (savedProgress) {
      setProgressSummary(savedProgress);
    }
  }, [localStore, plan]);

  const getFirstIncompleteExercise = (): WorkoutModelTy | undefined => {
    return playList.find(exercise => !exercise.completed);
  };

  const isLastExercise = (exerciseId: string): boolean => {
    const lastExercise = playList[playList.length - 1];
    return lastExercise._id === exerciseId;
  };

  const isFirstExercise = (exerciseId: string): boolean => {
    return playList.findIndex(exercise => exercise._id === exerciseId) === 0;
  };

  const hasNextIncompleteExercise = (): boolean => {
    return playList.some(exercise => !exercise.completed);
  };

  const hasNextExercise = (exerciseId: string): boolean => {
    const index = playList.findIndex(exercise => exercise._id === exerciseId);
    return index !== -1 && index < playList.length - 1;
  };

  const hasPreviousExercise = (exerciseId: string): boolean => {
    return playList.findIndex(exercise => exercise._id === exerciseId) > 0;
  };

  const complete = (_id: string) => {
    localStore.complete(_id);
    const savedProgress = localStore.getProgressSummary();
    if (savedProgress) {
      setProgressSummary(savedProgress);
    }
  };

  const getDayChallenge = (idx: number) => {
    return localStore.getUniquePlan(idx);
  };
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
        progressSummary,
        setProgressSummary,
        getDayChallenge,
        refreshUser,
        isLogin,
        login,
        logout,
        setLogin,
      }}>
      {children}
    </ProviderContext.Provider>
  );
};

/**
 * Custom hook to use the AppProvider.
 *
 * @returns {ProviderProps} The context value.
 * @throws {Error} If the hook is used outside of a AppProvider.
 */
export const useProvider = (): ProviderProps => {
  const context = useContext(ProviderContext);
  if (!context) {
    throw new Error('useProvider must be used within an AppProvider');
  }
  return context;
};
