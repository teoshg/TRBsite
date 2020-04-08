import { ContatoComponent } from './navmenu/contato/contato.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './navmenu/menu.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
  ],
  providers: [ContatoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
