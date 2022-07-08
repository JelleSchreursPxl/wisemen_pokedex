import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonDataComponent } from './components/pokemon-data/pokemon-data.component';
import { PokemonListCardComponent } from './components/pokemon-list-card/pokemon-list-card.component';
import { InfoTabsComponent } from './components/info-tabs/info-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDataComponent,
    PokemonListCardComponent,
    InfoTabsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
