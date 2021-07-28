import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { GamesComponent } from './components/games/games.component';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
  },
  {
    path: ':name',
    component: GameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
