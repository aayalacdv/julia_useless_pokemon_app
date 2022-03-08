import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { VotingScreenComponent } from './voting-screen/voting-screen.component';
import { ListarPokemonsComponent } from './components/listar-pokemons/listar-pokemons.component';

const routes: Routes = [
  { path: '', component: VotingScreenComponent },
  { path: 'ranking', component: ListarPokemonsComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
