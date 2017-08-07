import { Deck } from './deck';
import { Rank } from './rank';
import { Card } from './card';

export class Hand {
    private _cards: Array<Card>;

    constructor(c1?: Card, c2?: Card) {
        if (c1 && c2) {
            this._cards = [c1, c2];
        } else {
            this._cards = [];
        }
    }


    public addCard(c: Card) {
        this._cards.push(c);
    }

    public getValue() {
        let val = 0;
        let aceCount = 0;

        this._cards.forEach((c) => {
            if (c.isAce()) {
                aceCount += 1;
            }
            val += c.rank;
        });
        while ( val > 21 && aceCount ) {
            val -= 10;
            aceCount -= 1;
        }
        return val;
    }
}
