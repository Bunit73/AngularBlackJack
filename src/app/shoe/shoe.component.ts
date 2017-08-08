import { GameService } from './../services/game.service';
import { Shoe } from './../global-resources/shoe';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.css']
})
export class ShoeComponent implements OnInit {
  @Input('cardsRemaining') cardsRemaining: number;
  @Input('deckSize') deckSize: number;
  private _shoe: Shoe;

  constructor(private gameService: GameService) {
    this._shoe = new Shoe(1);
    this.cardsRemaining = 0;
    this.deckSize = this._shoe.cards.length;
  }

  ngOnInit() {

  }

}
