import {WorkoutModel} from '@core/db/models';
export interface PrimaryCardProps {
  title: string;
  description?: string;
  image?: string;
  items: WorkoutModel[];
  index: number;
}
