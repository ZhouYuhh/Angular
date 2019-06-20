import { Injectable } from '@angular/core';
import Dexie from 'dexie';

import { DexieService } from './dexie.service';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  table: Dexie.Table<Comment, number>;

  constructor(private dexieService: DexieService) {
    this.table = this.dexieService.table('comments');
  }

  add(data) {
    return this.table.add(data);
  }

  getComments(type: string, item_id: string) {
    return this.table.orderBy('date').filter(comment => {
      if (comment.active) {
        return comment.type === type && comment.item_id === item_id;
        }
    });
  }

  countComments(type: string, item_id: string) {
    return this.getComments(type, item_id).count();
  }

  inactiveComment(id: number) {
    return this.table.update(id, { active: false });
  }
}
