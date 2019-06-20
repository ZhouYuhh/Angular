import { NonFilmDetail } from './ItemDetail';

export interface Species extends NonFilmDetail {
  classification: string;
  people: string[];
  hair_colors: string[];
  homeworld: string;
  average_height: string;
  average_lifespan: string;
  designation: string;
  skin_colors: string;
  eye_colors: string;
  films: string[];
  language: string;
}
