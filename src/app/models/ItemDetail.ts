import { Comment } from './Comment';

export interface ItemDetail {
  edited: string;
  url: string;
  created: string;
  comments: Comment[];
}

export interface NonFilmDetail extends ItemDetail {
  name: string;
}
