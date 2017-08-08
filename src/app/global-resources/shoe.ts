import { Card } from './card';
import { Rank } from './Rank';
import { Suit } from './Suits';


export class Shoe {
    private _cards: Array<Card> = [];
    private _numberOfDecks: number;
    private _cut: number;

    constructor(deckCount?: number, cut?: number) {
        const totalShoeSize = this._numberOfDecks * Object.keys(Rank).length / 2 * Object.keys(Suit).length;

        if (deckCount === null) {
            this._numberOfDecks = 1;
        }

        if (cut === null || cut >= 1) {
            this._cut = totalShoeSize * .75 ;
        } else if ( cut < (totalShoeSize * .4)) {
            this._cut = 1 - cut ;
        } else {
            this._cut = cut;
        }
        this.resetShoe();
    }

    /**
     * Shuffle the shoe
     * Ref: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
     */
    private shuffle(arr: any[]) {
        for (let i = arr.length; i; i--) {
            const j = Math.floor(Math.random() * i);
            [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
        }
    }

    get cards(){
        return this._cards;
    }

    private resetShoe() {
        this._cards = [];
        for (let i = 0; i < this._numberOfDecks; i++) {
            // Generate all 52 cards for the deck
            for (const r in Rank) {
                if (typeof Rank[r] === 'number') {
                    for (const s in Suit) {
                        if (typeof Suit[s] === 'number') {
                            this._cards.push(new Card( Number(Suit[s]), Number(Rank[r])));
                        }
                    }
                }
            }
        }
        this.shuffle(this._cards);
    }

    public popCard() {
        return this._cards.pop();
    }
}
