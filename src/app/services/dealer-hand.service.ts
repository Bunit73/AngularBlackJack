import { Card } from './../global-resources/card';
import { Hand } from './../global-resources/hand';
import { Injectable } from '@angular/core';

@Injectable()
export class DealerHandService {
  private _hand: Hand;

  constructor() {
    this._hand = new Hand();
  }

  addToHand(c: Card) {
    this._hand.addCard(c);
  }

  getCards() {

  }

}
