import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Shoe } from '../global-resources/shoe';

// Subscribe multiple componets to this obserable
// https://stackoverflow.com/questions/40400062/angular2-call-method-of-other-component

@Injectable()
export class ShoeService {
  private notify = new Subject<any>();
  private _shoe: Shoe;

  notifyObservable$ = this.notify.asObservable();

  constructor() {
    this._shoe = new Shoe(1);
  }

  getDeckSize() {
    return this._shoe.remaingCards();
  }

  dealCard() {
    return this._shoe.popCard();
  }

  public notifyCardUpdate(data: any) {
    if (data) {
      this.notify.next(data);
    }
  }
}
