import {
  GeneralProgress,
  GeneralProgressTy,
  PhaseProgress,
} from '@core/data-types';
import {DayPlanModel} from '@core/db/models';
import {ModelNames} from '@core/db/types';
import Realm from 'realm';
import {getDayProgressSummary} from './daily';

export function getProgressSummary(
  realm: Realm,
): GeneralProgressTy | undefined {
  const calculatePhaseProgress = (phase: number): PhaseProgress => {
    // filter tasks for the specific phase
    const tasks = realm
      .objects<DayPlanModel>(ModelNames.DayPlanModel)
      .filtered('phase == $0', phase);
    const total = tasks.length;
    const completed = tasks.filter(
      task => task.completed === task.playlist.length,
    ).length;
    const progress = total > 0 ? completed / total : 0;
    const calories = tasks.reduce((acc, task) => acc + task.burn_calories, 0);
    return {total, completed, progress, calories};
  };

  // building the GeneralProgress object
  const phases = [1, 2, 3, 4, 5, 6];
  const progressSummary: GeneralProgress = phases.reduce((acc, phase) => {
    acc[`phase${phase}` as keyof GeneralProgress] =
      calculatePhaseProgress(phase);
    return acc;
  }, {} as GeneralProgress);

  const result = getDayProgressSummary(realm);
  return {general: progressSummary, day: result};
}
