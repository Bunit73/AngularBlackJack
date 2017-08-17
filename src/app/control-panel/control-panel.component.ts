import { Subscription } from 'rxjs/Subscription';
import { DealerHandService } from './../services/dealer-hand.service';
import { PlayerHandService } from './../services/player-hand.service';
import { ShoeService } from './../services/shoe.service';
import { Card } from './../global-resources/card';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  private playerSubscription: Subscription;
  private dealerSubscription: Subscription;
  dealPhase: boolean;
  playerPhase: boolean;
  dealerPhase: boolean;
  wager: number;
  bankRoll: number;

  constructor(private shoeService: ShoeService,
    private playerHandService: PlayerHandService,
    private dealerHandService: DealerHandService ) {
      this.dealPhase = true;
      this.playerPhase = false;
      this.dealerPhase = false;
      this.wager = 0;
      this.bankRoll = 1000;
    }

  ngOnInit() {
    this.playerSubscription = this.playerHandService.notifyObservable$.subscribe((res) => {
      if (res.action === 'start-dealer') {
        console.log('dealer phase');
        this.dealPhase = false;
        this.playerPhase = false;
        this.dealerPhase = true;
      }
    });
  }

  deal() {
    this.shoeService.resetShoe(1);

    this.shoeService.notifyCardUpdate({
      'newHand': true
    });

    this.shoeService.notifyCardUpdate({
      'action': 'add',
      'player': 'player',
      'card': this.shoeService.dealCard()
    });

    this.shoeService.notifyCardUpdate({
      'action': 'add',
      'player': 'dealer',
      'card': this.shoeService.dealCard()
    });

    this.shoeService.notifyCardUpdate({
      'action': 'add',
      'player': 'player',
      'card': this.shoeService.dealCard()
    });

    this.shoeService.notifyCardUpdate({
      'action': 'add',
      'downCard': true,
      'player': 'dealer',
      'card': this.shoeService.dealCard()
    });
    this.dealPhase = false;
    this.playerPhase = true;
    this.dealerPhase = false;
  }

  private hit() {
    this.shoeService.notifyCardUpdate({
      'action': 'add',
      'player': 'player',
      'card': this.shoeService.dealCard()
    });
  }

  private stand() {
    this.playerHandService.notifyUpdate({
      action: 'start-dealer'
    });
  }

  private double() {
    this.shoeService.notifyCardUpdate({
      'action': 'add',
      'player': 'player',
      'card': this.shoeService.dealCard()
    });
    this.stand();
  }

  private insurance() {
    console.log('insurance');
  }

  private bet(val: number) {
    this.wager += val;
  }

  private resetBet() {
    this.wager = 0;
  }

  private newGame() {
    this.dealPhase = true;
    this.playerPhase = false;
    this.dealerPhase = false;
    this.resetBet();
  }
}
