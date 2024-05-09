import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { CharactersComponent } from './components/characters/characters.component';
import { LocationsComponent } from './components/locations/locations.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [  
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'personagens', component: CharactersComponent },
  { path: 'localizacoes', component: LocationsComponent },
  { path: 'episodios', component: EpisodesComponent },  
  { path: 'detalhes', component: DetailsComponent },  
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
