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

  dealPhase: boolean;
  playerPhase: boolean;
  dealerPhase: boolean;

  constructor(private shoeService: ShoeService,
    private playerHandService: PlayerHandService, private dealerHandService: DealerHandService ) {
      this.dealPhase = true;
      this.playerPhase = false;
      this.dealerPhase = false;
    }

  ngOnInit() {
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

  hit() {
    this.shoeService.notifyCardUpdate({
      'action': 'add',
      'player': 'player',
      'card': this.shoeService.dealCard()
    });
  }

  stand() {
    this.dealPhase = false;
    this.playerPhase = false;
    this.dealerPhase = true;
  }
  double() {
    console.log('double');
  }
  insurance() {
    console.log('insurance');
  }
}
