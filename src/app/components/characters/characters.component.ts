import { Component, OnInit } from '@angular/core';
import { RickmortyApiService } from '../../services/rickmorty-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent implements OnInit{

  public getAllCharacters: any;

  constructor(
    private rickmortyApiService: RickmortyApiService
  ) { }

  ngOnInit(): void {

    this.rickmortyApiService.listAllCharacters.subscribe(    
        
      inf => {
        this.getAllCharacters = inf.results;
      }
    );
  }
}
