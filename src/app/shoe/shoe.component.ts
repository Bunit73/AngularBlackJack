import { ShoeService } from './../services/shoe.service';
import { Shoe } from './../global-resources/shoe';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.css']
})
export class ShoeComponent implements OnInit {
  private subscription: Subscription;
  @Input('cardsRemaining') cardsRemaining: number;
  @Input('deckSize') deckSize: number;

  constructor(private shoeService: ShoeService) {
    this.cardsRemaining = shoeService.getDeckSize();
    this.deckSize = shoeService.getDeckSize();
  }

  ngOnInit() {
    this.subscription = this.shoeService.notifyObservable$.subscribe((res) => {
      if(res.action === 'add') {
        this.cardsRemaining--;
      }
    });
  }

}
