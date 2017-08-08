import { Card } from './card';
import { Rank } from './Rank';
import { Suit } from './Suits';


export class Shoe {
    private _cards: Array<Card> = [];
    private _numberOfDecks: number;
    private _cut: number;
    private _singleDeck: boolean;

    constructor(deckCount?: number, cut?: number) {
        const totalShoeSize = this._numberOfDecks * Object.keys(Rank).length / 2 * Object.keys(Suit).length;
        if (deckCount === null) {
            this._numberOfDecks = 1;
        } else {
            this._numberOfDecks = deckCount;
        }

        if (cut === null) {
            this._cut = totalShoeSize * .75 ;
        } else if ( this._numberOfDecks === 1) {
            this._cut = 1;
        } else if ( cut < (totalShoeSize * .5)) {
            this._cut = 1 - cut ;
        } else {
            this._cut = cut;
        }
        this._singleDeck = deckCount === 1 ? true : false;
        this.populateShoe();
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

    private populateShoe() {
        this._cards = [];
        for (let i = 0; i < this._numberOfDecks; i++) {
            // Generate all 52 cards for the deck
            for (let r in Rank) {
                if (typeof Rank[r] === 'number') {
                    for (let s in Suit) {
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

    public remaingCards() {
        return this._cards.length;
    }

    get singleDeck() {
        return this._singleDeck;
    }
}
