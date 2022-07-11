import { FilterPipe } from './pipes/search_filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListCardComponent } from './components/pokemon-list-card/pokemon-list-card.component';
import { InfoTabsComponent } from './components/info-tabs/info-tabs.component';
import { PokemonNavigationbarComponent } from './components/pokemon-navigationbar/pokemon-navigationbar.component';
import { SearchComponent } from './components/search-component/search-component.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    InfoTabsComponent,
    PokemonDetailsComponent,
    PokemonListCardComponent,
    PokemonNavigationbarComponent,
    SearchComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
