import { Component, OnInit } from '@angular/core';
import { RickmortyApiService } from '../../services/rickmorty-api.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss'
})
export class EpisodesComponent implements OnInit{

  public getAllEpisodes: any;

  constructor(
    private rickmortyApiService: RickmortyApiService
  ) { }

  ngOnInit(): void {

    this.rickmortyApiService.listAllEpisodes.subscribe(    
        
      inf => {
        this.getAllEpisodes = inf.results;
      }
    );
  }
}
