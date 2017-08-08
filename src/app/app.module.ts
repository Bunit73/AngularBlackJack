import { GameService } from './services/game.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ShoeComponent } from './shoe/shoe.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    ShoeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
