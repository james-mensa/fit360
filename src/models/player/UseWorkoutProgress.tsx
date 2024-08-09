import {WorkoutModelTy} from '@core/db/types';
import {formatTime} from '@core/utils';
import {useProvider} from '@store/provider';
import {useCallback, useEffect, useMemo, useState} from 'react';
interface statusTy {
  count: number;
  progress: number;
  state: 'PLAYING' | 'PAUSED' | 'FINISHED' | 'NOT_YET' | 'INITIALING';
  hasPendinng: boolean;
}

export const initialStatus: statusTy = {
  count: 0,
  progress: 0,
  state: 'NOT_YET',
  hasPendinng: true,
};
const UseWorkoutProgress = (workout: WorkoutModelTy | undefined) => {
  const {complete} = useProvider();
  const duration = workout ? workout.duration : 120;
  const [status, setStatus] = useState<statusTy>(initialStatus);

  const handleStartCountDown = useCallback(() => {
    setTimeout(() => {
      setStatus(prev => ({...prev, state: 'INITIALING', count: 5}));
    }, 3500);
  }, []);

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;

    if (status.count > 0) {
      timerId = setInterval(() => {
        setStatus(prev => ({...prev, count: prev.count - 1}));
      }, 1400);
    }
    if (status.state === 'INITIALING' && status.count === 0) {
      setTimeout(() => {
        setStatus(prev => ({
          ...prev,
          state: 'PLAYING',
          progress: workout?.duration!,
        }));
      }, 3000);
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [status.count, workout?.duration, status.state]);

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;
    if (status.progress) {
      if (status.progress > 0) {
        timerId = setInterval(() => {
          setStatus(prev => ({...prev, progress: prev.progress - 1}));
        }, 1000);
        if (status.progress === 1) {
          setStatus(prev => ({
            ...prev,
            state: 'FINISHED',
          }));
          complete(workout?._id!);
        }
      }
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [complete, setStatus, status.progress, workout?._id]);

  const circumference = useMemo(() => 2 * Math.PI * 80, []);
  const progressPercentage = useMemo(() => {
    return status.progress === 0
      ? 0
      : circumference - (status.progress / duration) * circumference;
  }, [status.progress, duration, circumference]);

  const timerPercentage = useMemo(() => {
    return status.state === 'PLAYING'
      ? 100 - (status.progress / duration) * 100
      : 0;
  }, [status.state, status.progress, duration]);

  const indicatorLabel = useMemo(() => {
    if (status.state === 'NOT_YET') {
      return '🏋🏻‍♀️';
    }
    if (status.state === 'INITIALING') {
      return status.count === 0 ? 'starting' : status.count;
    }
    if (status.state === 'FINISHED') {
      return '🎊';
    }
    return formatTime(status.progress, true);
  }, [status.state, status.count, status.progress]);

  const indicatorFontSize = useMemo(() => {
    if (status.state === 'NOT_YET') {
      return 30;
    }
    if (status.state === 'INITIALING') {
      return status.count === 0 ? 18 : 70;
    }
    if (status.state === 'FINISHED') {
      return 30;
    }
    return 12;
  }, [status.state, status.count]);

  return {
    status,
    setStatus,
    handleStartCountDown,
    progressPercentage,
    timerPercentage,
    indicatorLabel,
    indicatorFontSize,
  };
};

export default UseWorkoutProgress;
