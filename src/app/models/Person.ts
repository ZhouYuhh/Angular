import { NonFilmDetail } from './ItemDetail';

export interface Person extends NonFilmDetail {
  species: string[];
  vehicles: string[];
  height: string;
  skin_color: string;
  eye_color: string;
  homeworld: string;
  birth_year: string;
  gender: string;
  starships: string[];
  films: string[];
  hair_color: string;
  mass: string;
}
