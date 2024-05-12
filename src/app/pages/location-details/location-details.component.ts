import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrl: './location-details.component.scss'
})
export class LocationDetailsComponent implements OnInit {

	locationId: number | undefined;
	location: any;
	residents: any[] = [];

	constructor(private route: ActivatedRoute, private http: HttpClient) { }

	ngOnInit(): void {
		this.locationId = this.route.snapshot.params['id'];
		this.getLocationDetails();
	}

	getLocationDetails() {

		if (this.locationId) {
			this.http.get(`https://rickandmortyapi.com/api/location/${this.locationId}`).subscribe((data: any) => {
				
				this.location = data;

				this.getResidentDetails(this.location.residents);
			});
		}
	}

	//Função para receber os valores dos personagens
	getResidentDetails(characterUrl: string[]) {
		// Mapeia cada URL do episódio para uma solicitação HTTP e as combina em uma única solicitação
		const requests = characterUrl.map(url => this.http.get(url));

		forkJoin(requests).subscribe((residents: any[]) => {

			this.residents = residents;
		});
	}
}
