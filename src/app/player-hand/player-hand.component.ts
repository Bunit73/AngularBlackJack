import { Card } from './../global-resources/card';
import { Hand } from './../global-resources/hand';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ShoeService } from "../services/shoe.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-player-hand',
  templateUrl: './player-hand.component.html',
  styleUrls: ['./player-hand.component.css'],
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
export class PlayerHandComponent implements OnInit {
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
      if (res.player === 'player') {
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
