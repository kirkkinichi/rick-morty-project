import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';

// Componentes
import { CharactersComponent } from './pages/characters/characters.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { EpisodeDetailsComponent } from './pages/episode-details/episode-details.component';
import { LocationDetailsComponent } from './pages/location-details/location-details.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth/auth.guard';


//Rotas
const routes: Routes = [  
  { path: '', redirectTo:'/home', pathMatch: 'full' }, // Se vazio, redireciona para /home
  { path: 'home', component: HomePageComponent, canActivate: [(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AuthGuard).canActivate(next, state)] },
  { path: 'personagens', component: CharactersComponent, canActivate: [(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AuthGuard).canActivate(next, state)] },
  { path: 'localizacoes', component: LocationsComponent, canActivate: [(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AuthGuard).canActivate(next, state)] },
  { path: 'episodios', component: EpisodesComponent, canActivate: [(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AuthGuard).canActivate(next, state)] },  
  { path: 'personagem-detalhes/:id', component: CharacterDetailsComponent, canActivate: [(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AuthGuard).canActivate(next, state)] },  
  { path: 'episodio-detalhes/:id', component: EpisodeDetailsComponent, canActivate: [(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AuthGuard).canActivate(next, state)] },  
  { path: 'localizacao-detalhes/:id', component: LocationDetailsComponent, canActivate: [(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AuthGuard).canActivate(next, state)] },  
  { path: 'login', component: LoginComponent },  
  { path: "**", component: PageNotFoundComponent, canActivate: [(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AuthGuard).canActivate(next, state)] } // Para páginas não existentes, é utilizado o componente PageNotFoundComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
