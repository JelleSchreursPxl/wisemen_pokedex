import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';

import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'pokemon', component: AppComponent },
  { path: 'pokemon/:pokemonId', component: PokemonDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
