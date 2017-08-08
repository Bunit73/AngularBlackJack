import { Iplayer } from './Iplayer';
import { Hand } from './hand';
import { Card } from './card';

export class Dealer implements Iplayer {
    _name: string;
    _hand: Hand;
    _busted: boolean;

    constructor(c1: Card, c2: Card) {
        this._hand = new Hand(c1, c2);
        this._busted = false;
        this._name = 'Dealer';
    }

    Hit(c: Card) {
        this._hand.addCard(c);
    }
    Stand() {
        throw new Error("Method not implemented.");
    }
    Busted() {
        throw new Error("Method not implemented.");
    }

}
