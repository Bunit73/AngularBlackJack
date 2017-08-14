import { Card } from '../global-resources/card';
import { Hand } from '../global-resources/hand';

export interface Ihand {
    hand: Hand;
    addToHand(c: Card);
    currentScore();
    resetHand();
}
