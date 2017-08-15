import { PlayerHandService } from './../services/player-hand.service';
import { DealerHandService } from './../services/dealer-hand.service';
import { ShoeService } from './../services/shoe.service';
import { Component, OnInit, Input } from '@angular/core';
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
  private shoeSubscription: Subscription;
  private playerSubscription: Subscription;
  busted: boolean;
  @Input('currentScore') currentScore: number;

  constructor(private shoeService: ShoeService,
    private dealerHandService: DealerHandService,
    private playerHandService: PlayerHandService,
  ) {
    this.busted = false;
    this.currentScore = 0;
   }

  ngOnInit() {
    this.shoeSubscription = this.shoeService.notifyObservable$.subscribe((res) => {
      if (res.newHand) {
        this.currentScore = 0;
        this.busted = false;
        this.dealerHandService.resetHand();
      }
      if (res.player === 'dealer') {
        if ( res.action === 'add' ) {
          this.dealerHandService.addToHand(res.card);
        }
      }
    });

    this.playerSubscription = this.playerHandService.notifyObservable$.subscribe((res) => {
      if (res.action === 'start-dealer') {
        this.startDealer();
      }
    });
  }

  private clearHand() {
    this.dealerHandService.resetHand();
  }

  private startDealer() {
    this.dealerHandService.flipCard();
    this.currentScore = this.dealerHandService.hand.getValue();
    this.dealerActions();
  }

  private dealerActions() {
    // dealer doesnt hit on soft 17
    while ( this.currentScore < 17 ) {
      this.shoeService.notifyCardUpdate({
        'action': 'add',
        'player': 'dealer',
        'card': this.shoeService.dealCard()
      });

      this.currentScore = this.dealerHandService.hand.getValue();
      if ( this.currentScore > 21 ) {
        this.busted = true;
      }
    }
  }
}
