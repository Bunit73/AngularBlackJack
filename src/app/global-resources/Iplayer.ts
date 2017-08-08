import { Hand } from './hand';
import { Card } from './card';

export interface Iplayer {
    _name: string;
    _hand: Hand;
    _busted: boolean;

    Hit(c: Card);
    Stand();
    Busted();
}
