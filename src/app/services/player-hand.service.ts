import { Ihand } from './Ihand.service';
import { Injectable } from '@angular/core';
import { Card } from '../global-resources/card';
import { Hand } from '../global-resources/hand';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PlayerHandService implements Ihand {
  private notify = new Subject<any>();
  notifyObservable$ = this.notify.asObservable();

  hand: Hand;

  constructor() {
    this.hand = new Hand();
  }

  public addToHand(c: Card) {
    this.hand.addCard(c);
  }

  public currentScore() {
    return this.hand.getValue();
  }

  public resetHand() {
    this.hand = new Hand();
  }

  public notifyPlayerUpdate(data: any) {
    if (data) {
      this.notify.next(data);
    }
  }
}
