import {collectTy, DayProgressTy} from '@core/data-types';
import {getPlan} from '@core/db/common';
import Realm from 'realm';

export function getDayProgressSummary(realm: Realm): DayProgressTy {
  const collection = new Map<string, collectTy>();

  // filter tasks for the specific phase
  const tasks = getPlan(realm);

  for (const task of tasks) {
    const type = task.playlist[0].type;

    const progress: collectTy = {
      workout: {
        total: task.playlist.length,
        completed: task.completed,
      },
      calories: task.burn_calories,
    };
    collection.set(type!, progress);
  }
  const keys = Array.from(collection.keys());
  return {data: collection, label: keys};
}
