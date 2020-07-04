import { ITeam } from '.';

export interface IMatch {
  id: number;
  teams: ITeam[];
  score: { [id: number]: number };
}
