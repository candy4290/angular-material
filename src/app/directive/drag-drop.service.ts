import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
export interface DragData {
  tag: string; // 区分哪一级拖拽
  data: any;
}
@Injectable()
export class DragDropService {
  private _dragData = new BehaviorSubject<DragData>(null);
  constructor() {

  }

  setDragData(data: DragData) {
    this._dragData.next(data);
  }

  getDragData(): Observable<DragData> {
    return this._dragData.asObservable();
  }

  clearDragData() {
    this._dragData.next(null);
  }

}
