import { Component, HostListener } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from '../../utils';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const DEFAULT_CHARACTERS_URL = 'https://rickandmortyapi.com/api/character';


@Component({
	selector: 'app-characters',
	templateUrl: './characters.component.html',
	styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

	characters: any[] = []; // Armazena personagens da API
	characterUrl: string = DEFAULT_CHARACTERS_URL; // Armazena a próxima página a ser carregada
	loading = false; // Indica o estado da solicitação HTTP
	error: string = '';

	// Construtor cria novo objeto URL com base na characterUrl
	constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
		this.route.queryParams.subscribe(params => {
			this.characters = [];
			const foundParamInput = params['inputParam']
			if (foundParamInput && this.characterUrl) {				
				const newUrl = new URL(this.characterUrl);
				newUrl.searchParams.set('page', '1')
				newUrl.searchParams.set('name', foundParamInput)
				let manipulatedUrl = newUrl.toString().replace('?', "/?")
				manipulatedUrl = newUrl.toString().replace('//?', "/?")
				this.characterUrl = manipulatedUrl
			} else {
				this.characterUrl = DEFAULT_CHARACTERS_URL;
			}
			this.checkLoadCharacters();
		});
	}


	// Carrega os personagens da API e verifica se há uma solicitação HTTP em andamento
	checkLoadCharacters() {
		this.error = '';
		// Verifica se há uma solicitação em andamento / página para carregar
		if (this.loading || !this.characterUrl) {
			return;
		}
		// Inicia solicitação
		this.loading = true;

		//Delay ao scrollar
		delay(1500).then(() => {
			// Solicitação GET para obter os personagens e atualizar com a URL da próxima página
			this.http.get(this.characterUrl).pipe(catchError((error) => {
				this.handleError(error);
				return throwError(error);
			  })).subscribe((data: any) => {
				this.characters = this.characters.concat(data.results);
				this.characterUrl = data.info.next;
				this.loading = false; // Atribuído valor false para indicar que a solicitação foi concluída
			});
		});
	}

	handleError(error: HttpErrorResponse) {
		this.loading = false;
		if (error.status === 404) {
			this.error = 'Nenhum personagem encontrado.'
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

		// Chama o método checkLoadCharacters() para carregar mais personagens
		if (nearEnd && this.characterUrl) {
			this.checkLoadCharacters();
		}
	}
}
