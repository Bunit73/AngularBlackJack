import { ShoeService } from './../services/shoe.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Hand } from "../global-resources/hand";
import { Card } from "../global-resources/card";

@Component({
  selector: 'app-dealer-hand',
  templateUrl: './dealer-hand.component.html',
  styleUrls: ['./dealer-hand.component.css']
})
export class DealerHandComponent implements OnInit {
  private subscription: Subscription;
  hand: Hand;

  constructor(private shoeService: ShoeService) {
    this.hand = new Hand();
   }

  ngOnInit() {
    this.subscription = this.shoeService.notifyObservable$.subscribe((res) => {
      if (res.newHand) {
        this.clearHand();
      }
      if (res.player === 'dealer') {
        if ( res.action === 'add' ) {
          this.addToHand(res.card);
        }
      }
    });
  }

  private addToHand(c: Card) {
    this.hand.addCard(c);
  }

  private clearHand() {
    this.hand = new Hand();
  }
}
