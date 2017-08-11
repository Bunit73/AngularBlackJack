import { ShoeService } from './../services/shoe.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Hand } from '../global-resources/hand';
import { Card } from '../global-resources/card';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-dealer-hand',
  templateUrl: './dealer-hand.component.html',
  styleUrls: ['./dealer-hand.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(100%)'
        }),
        animate('0.3s ease-in')
      ]),
      transition('* => void', [
        animate(2000, style({ opacity: 0 }))
      ])
    ])
  ]
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
    if (this.hand.cards.length === 2 ) {
      this.hand.flipCard(1);
    }
  }

  private clearHand() {
    this.hand = new Hand();
  }
}
