import { NonFilmDetail } from './ItemDetail';

export interface Starship extends NonFilmDetail {
  max_atmosphering_speed: string;
  starship_class: string;
  MGLT: string;
  manufacturer: string;
  cargo_capacity: string;
  consumables: string;
  model: string;
  pilots: string[];
  crew: string;
  cost_in_credits: string;
  length: string;
  films: string[];
  hyperdrive_rating: string;
  passengers: string;
}
