import { Ihand } from './Ihand.service';
import { Card } from './../global-resources/card';
import { Hand } from './../global-resources/hand';
import { Injectable } from '@angular/core';

@Injectable()
export class DealerHandService implements Ihand {
  hand: Hand;

  constructor() {
    this.hand = new Hand();
  }

  public addToHand(c: Card) {
    this.addToHand(c);
  }

  public currentScore() {
    return this.hand.getValue();
  }

  public resetHand() {
    this.hand = new Hand();
  }

}
