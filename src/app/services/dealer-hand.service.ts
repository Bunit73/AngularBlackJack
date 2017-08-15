import { Ihand } from './Ihand.service';
import { Card } from './../global-resources/card';
import { Hand } from './../global-resources/hand';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DealerHandService implements Ihand {
  private notify = new Subject<any>();
  hand: Hand;

  notifyObservable$ = this.notify.asObservable();

  constructor() {
    this.hand = new Hand();
  }

  public addToHand(c: Card) {
    this.hand.addCard(c);
    if ( this.hand.cards.length === 2 ) {
      this.hand.flipCard(1);
    }
  }

  public currentScore() {
    return this.hand.getValue();
  }

  public resetHand() {
    this.hand = new Hand();
  }

  public notifyUpdate(data: any) {
    if (data) {
      this.notify.next(data);
    }
  }

  public flipCard() {
    this.hand.flipCard(1);
  }
}
