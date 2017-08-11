import { PlayerHandService } from './services/player-hand.service';
import { ShoeService } from './services/shoe.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ShoeComponent } from './shoe/shoe.component';
import { PlayerHandComponent } from './player-hand/player-hand.component';
import { DealerHandComponent } from './dealer-hand/dealer-hand.component';
import { DealerHandService } from './services/dealer-hand.service';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    ShoeComponent,
    PlayerHandComponent,
    DealerHandComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [ShoeService, PlayerHandService, DealerHandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
