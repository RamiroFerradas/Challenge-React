import { Person } from "./people";

export interface AppStore {
  people: Person[];
  favorites: Person[];
}
