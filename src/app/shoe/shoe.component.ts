import { ShoeService } from './../services/shoe.service';
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

  constructor(private shoeService: ShoeService) {
    this.cardsRemaining = shoeService.getDeckSize();
    this.deckSize = shoeService.getDeckSize();
  }

  ngOnInit() {

  }

}
