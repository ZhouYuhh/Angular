import { ItemDetail } from './ItemDetail';

export interface Film extends ItemDetail {
  episode_id: number;
  vehicles: string[];
  species: string[];
  opening_crawl: string;
  producer: string;
  title: string;
  planets: string[];
  release_date: string;
  director: string;
  characters: string[];
  starships: string[];
}
