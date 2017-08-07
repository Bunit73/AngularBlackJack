import { Iplayer } from './Iplayer';
import { Hand } from './hand';

export class Dealer implements Iplayer {
    _name: string;
    _hand: Hand;
    _busted: boolean;

    constructor() {
        this._hand = new Hand();
        this._busted = false;
        this._name = 'Dealer';
    }

    Hit() {
        throw new Error("Method not implemented.");
    }
    Stand() {
        throw new Error("Method not implemented.");
    }
    Busted() {
        throw new Error("Method not implemented.");
    }

}