import { Component, HostListener } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from '../../utils';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const DEFAULT_EPISODES_URL = 'https://rickandmortyapi.com/api/episode';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss'
})
export class EpisodesComponent {

  episodes: any[] = []; // Armazena personagens da API
	episodeUrl: string = DEFAULT_EPISODES_URL; // Armazena a próxima página a ser carregada
	loading = false; // Indica o estado da solicitação HTTP
	error: string = '';

	// Construtor cria novo objeto URL com base no episodeUrl
	constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
		this.route.queryParams.subscribe(params => {
			this.episodes = [];
			const foundParamInput = params['inputParam']
			if (foundParamInput && this.episodeUrl) {				
				const newUrl = new URL(this.episodeUrl);
				newUrl.searchParams.set('page', '1')
				newUrl.searchParams.set('name', foundParamInput)
				let manipulatedUrl = newUrl.toString().replace('?', "/?")
				manipulatedUrl = newUrl.toString().replace('//?', "/?")
				this.episodeUrl = manipulatedUrl
			} else {
				this.episodeUrl = DEFAULT_EPISODES_URL;
			}
			this.checkLoadEpisodes();
		});
	}


	// Carrega os personagens da API e verifica se há uma solicitação HTTP em andamento
	checkLoadEpisodes() {
		this.error = '';
		// Verifica se há uma solicitação em andamento / página para carregar
		if (this.loading || !this.episodeUrl) {
			return;
		}
		// Inicia solicitação
		this.loading = true;

		//Delay ao scrollar
		delay(1500).then(() => {
			// Solicitação GET para obter os personagens e atualizar com a URL da próxima página
			this.http.get(this.episodeUrl).pipe(catchError((error) => {
				this.handleError(error);
				return throwError(error);
			  })).subscribe((data: any) => {
				this.episodes = this.episodes.concat(data.results);
				this.episodeUrl = data.info.next;
				this.loading = false; // Atribuído valor false para indicar que a solicitação foi concluída
			});
		});
	}

	handleError(error: HttpErrorResponse) {
		this.loading = false;
		if (error.status === 404) {
			this.error = 'Nenhum episódio encontrado.'
		} else {
			this.error = 'Ops! Erro ao processar uma requisição.'
		}
	}

	// Método chamado ao ocorrer o scroll (rolamento) na janela
	@HostListener('window:scroll', ['$event'])
	scrollAction() {
		// Variáveis para calcular o scroll da página
		const height = window.innerHeight;
		const scroll = window.scrollY;
		const totalHeight = document.body.offsetHeight;

		// Cálculo para verificar se o usuário está próximo ao fim da página, a uma distância de 200 pixels para garantir que a detecção aconteça antes do final da página
		const nearEnd = height + scroll >= totalHeight - 200;

		// Chama o método checkLoadEpisodes() para carregar mais personagens
		if (nearEnd && this.episodeUrl) {
			this.checkLoadEpisodes();
		}
	}
}
