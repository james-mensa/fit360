export type Navigation = {
  goBack(): unknown;
  navigate: (screen: string) => void;
};
export interface statusTy {
  count: number;
  progress: number;
  state: 'PLAYING' | 'PAUSED' | 'FINISHED' | 'NOT_YET' | 'INITIALING';
  hasPendinng: boolean;
}
