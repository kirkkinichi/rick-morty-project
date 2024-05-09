import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RickmortyApiService {

  private characterUrl: string = 'https://rickandmortyapi.com/api/character/';
  private locationUrl: string = 'https://rickandmortyapi.com/api/location/';
  private episodeUrl: string = 'https://rickandmortyapi.com/api/episode/';

  constructor(
    private http: HttpClient
  ) { }

  // Lista todos os Personagens
  get listAllCharacters():Observable<any>{
    return this.http.get<any>(this.characterUrl).pipe(
      tap(inf => inf),
      tap(inf => {
        console.log(inf)
      })
    )   
  }
}
