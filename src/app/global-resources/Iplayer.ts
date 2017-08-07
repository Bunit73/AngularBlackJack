import { Hand } from './hand';
export interface Iplayer {
    _name: string;
    _hand: Hand;
    _busted: boolean;

    Hit();
    Stand();
    Busted();
}
