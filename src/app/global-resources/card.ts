import { Suit } from './suits';
import { Rank } from './rank';

export class Card {
    private _suit: Suit;
    private _rank: Rank;
    private _value: Number;

    constructor( _suit?: Suit, _rank?: Rank) {

        this._suit = _suit;
        this._rank = _rank;

        if (this._rank === Rank.Ace) {
            this._value = 11;
        } else if (this._rank in [Rank.Jack, Rank.Queen, Rank.King]) {
            this._value = 10;
        } else {
            this._value = _rank;
        }
    }

    get suit() {
        return this._suit;
    }

    get rank() {
        return this._rank;
    }

    isAce() {
        return this._rank === Rank.Ace ? true : false;
    }
}
