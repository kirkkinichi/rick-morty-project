import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
selector: 'app-character-details',
templateUrl: './character-details.component.html',
styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

	characterId: number | undefined;
	character: any;
	episodes: any[] = [];
	origin: any;
	location: any;

	constructor(private route: ActivatedRoute, private http: HttpClient) { }

	ngOnInit(): void {
		this.characterId = this.route.snapshot.params['id'];
		this.getCharacterDetails();
	}

	getCharacterDetails() {
		if (this.characterId) {
			this.http.get(`https://rickandmortyapi.com/api/character/${this.characterId}`).subscribe((data: any) => {
				this.character = data;
				// Obtém os detalhes a partir dos métodos get details
				this.getEpisodeDetails(this.character.episode);
				this.getOriginDetails(this.character.origin.url);
				this.getLocationDetails(this.character.location.url);
			});
		}
	}

	getEpisodeDetails(episodeUrls: string[]) {
		// Mapeia cada URL do episódio para uma solicitação HTTP e as combina em uma única solicitação
		const requests = episodeUrls.map(url => this.http.get(url));

		forkJoin(requests).subscribe((episodes: any[]) => {

			this.episodes = episodes; // Armazena os detalhes dos episódios
		});
	}

	getOriginDetails(originUrl: string) {
		if (!originUrl) {
			
			this.origin = { name: 'Unknown' };
			return;
		}

		this.http.get(originUrl).subscribe((data: any) => {

			this.origin = data; 
		});
	}

	getLocationDetails(locationUrl: string) {
		if (!locationUrl) {

			this.location = { name: 'Unknown' };
		return;
		}

		this.http.get(locationUrl).subscribe((data: any) => {

			this.location = data;
		});
	}
}
