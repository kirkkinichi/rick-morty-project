import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { CharactersComponent } from './components/characters/characters.component';
import { LocationsComponent } from './components/locations/locations.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';


//Rotas
const routes: Routes = [  
  { path: '', redirectTo:'/home', pathMatch: 'full' }, // Se vazio, redireciona para /home
  { path: 'home', component: HomePageComponent },
  { path: 'personagens', component: CharactersComponent },
  { path: 'localizacoes', component: LocationsComponent },
  { path: 'episodios', component: EpisodesComponent },  
  { path: 'personagem-detalhes', component: CharacterDetailsComponent },  
  { path: "**", component: PageNotFoundComponent } // Para páginas não existentes, é utilizado o componente PageNotFoundComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
