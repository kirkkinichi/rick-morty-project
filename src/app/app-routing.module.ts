import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { CharactersComponent } from './components/characters/characters.component';
import { LocationsComponent } from './components/locations/locations.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [  
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'personagens', component: CharactersComponent },
  { path: 'localizacoes', component: LocationsComponent },
  { path: 'episodios', component: EpisodesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
