import { Suit } from './suits';
import { Rank } from './rank';

export class Card {
    private _suit: Suit;
    private _rank: Rank;
    private _value: number;

    constructor( _suit?: Suit, _rank?: Rank) {
        this._suit = _suit;
        this._rank = _rank;

        if (this._rank === Rank.Ace) {
            this._value = 11;
        } else if ([Rank.Jack, Rank.Queen, Rank.King].find( x => x === this._rank)) {
            this._value = 10;
        } else {
            this._value = _rank;
        }
    }

    get suit() {
        return Suit[this._suit];
    }

    get rank() {
        return Rank[this._rank];
    }

    get value() {
        return this._value;
    }

    get imgLink() {
        let rank: string;
        let suit: string;

        if ( this._rank < 11) {
            rank = '' + this._rank;
        } else if ( this._rank === 11 ) {
            rank = 'jack';
        } else if ( this._rank === 12) {
            rank = 'queen';
        } else if ( this._rank === 13 ) {
            rank = 'king';
        } else { rank = 'ace'; }

        suit = '' + Suit[this._suit];

        return rank + '_of_' + suit.toLocaleLowerCase() + 's.svg';
    }

    isAce() {
        return this._rank === Rank.Ace ? true : false;
    }
}
