import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
	selector: 'app-episode-details',
	templateUrl: './episode-details.component.html',
	styleUrl: './episode-details.component.scss'
})
export class EpisodeDetailsComponent implements OnInit {

	episodeId: number | undefined;
	episode: any;
	characters: any[] = [];

	constructor(private route: ActivatedRoute, private http: HttpClient) { }

  	ngOnInit(): void {
    	this.episodeId = this.route.snapshot.params['id'];
		this.getEpisodeDetails();
  	}

	getEpisodeDetails() {

		if (this.episodeId) {
			this.http.get(`https://rickandmortyapi.com/api/episode/${this.episodeId}`).subscribe((data: any) => {
				
				this.episode = data;

				this.getCharacterDetails(this.episode.characters);
			});
		}
	}

	//Função para receber os valores dos personagens
	getCharacterDetails(characterUrl: string[]) {
		// Mapeia cada URL do episódio para uma solicitação HTTP e as combina em uma única solicitação
		const requests = characterUrl.map(url => this.http.get(url));

		forkJoin(requests).subscribe((characters: any[]) => {

			this.characters = characters;
		});
	}
}
