import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { CharactersComponent } from './components/characters/characters.component';
import { LocationsComponent } from './components/locations/locations.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { SearchComponent } from './components/search/search.component';
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    HeaderComponent,
    CharactersComponent,
    LocationsComponent,
    EpisodesComponent,
    HomePageComponent,
    PageNotFoundComponent,
    CharacterDetailsComponent,
    SearchComponent,
    EpisodeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
