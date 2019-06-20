import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class DexieService extends Dexie {
  constructor() {
    super('StarWarsVisualGuideDb');
    this.version(1).stores({
      comments: '++id,type,item_id,date,text,active'
    });
  }
}
