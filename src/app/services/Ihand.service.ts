import { Card } from '../global-resources/card';
import { Hand } from '../global-resources/hand';

export interface Ihand {
    hand: Hand;
    addToHad(c: Card);
    currentScore();
    resetHand();
}
