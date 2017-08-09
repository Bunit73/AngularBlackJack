import { Card } from './../global-resources/card';
import { Hand } from './../global-resources/hand';
import { Component, OnInit } from '@angular/core';
import { ShoeService } from "../services/shoe.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-player-hand',
  templateUrl: './player-hand.component.html',
  styleUrls: ['./player-hand.component.css']
})
export class PlayerHandComponent implements OnInit {
  private subscription: Subscription;
  hand: Hand;
  cardList: Array<Card>;

  constructor(private shoeService: ShoeService) {
    this.hand = new Hand();
  }

  ngOnInit() {
    this.subscription = this.shoeService.notifyObservable$.subscribe((res) => {
      if (res.newHand) {
        this.clearHand();
      }
      if (res.player === 'player') {
        if ( res.action === 'add' ) {
          this.addToHand(res.card);
        }
      }
    });
  }

  private addToHand(c: Card) {
    this.hand.addCard(c);
    console.log(this.hand);
  }

  private clearHand() {
    this.hand = new Hand();
  }

}
