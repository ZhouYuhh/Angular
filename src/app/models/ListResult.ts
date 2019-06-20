import { ItemDetail } from './ItemDetail';

export interface ListResult {
  count: string;
  next: string;
  previous: string;
  results: ItemDetail[];
}
