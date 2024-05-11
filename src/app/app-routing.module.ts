import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { CharactersComponent } from './pages/characters/characters.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';
import { LocationDetailsComponent } from './components/location-details/location-details.component';


//Rotas
const routes: Routes = [  
  { path: '', redirectTo:'/home', pathMatch: 'full' }, // Se vazio, redireciona para /home
  { path: 'home', component: HomePageComponent },
  { path: 'personagens', component: CharactersComponent },
  { path: 'localizacoes', component: LocationsComponent },
  { path: 'episodios', component: EpisodesComponent },  
  { path: 'personagem-detalhes/:id', component: CharacterDetailsComponent },  
  { path: 'episodio-detalhes/:id', component: EpisodeDetailsComponent },  
  { path: 'localizacao-detalhes/:id', component: LocationDetailsComponent },  
  { path: "**", component: PageNotFoundComponent } // Para páginas não existentes, é utilizado o componente PageNotFoundComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
