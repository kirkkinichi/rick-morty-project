import { Injectable, HostListener, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { delay } from '../../utils';
import { SEARCH_URL } from './search.config';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  data: any[] = []; // Armazena personagens da API
	loading = false; // Indica o estado da solicitação HTTP

	// Construtor
	constructor(private http: HttpClient, private router: Router, @Inject(SEARCH_URL) private searchUrl: string) { }

	// Carrega os personagens da API e verifica se há uma solicitação HTTP em andamento
	checkLoadCharacters() {    
		// Verifica se há uma solicitação em andamento / página para carregar
		if (this.loading || !this.searchUrl) {
			return;
		}
		// Inicia solicitação
		this.loading = true;

		//Delay ao scrollar
		delay(1500).then(()=> {
			// Solicitação GET para obter os personagens e atualizar com a URL da próxima página
				this.http.get(this.searchUrl || "").subscribe((data: any) => {

				this.data = this.data.concat(data.results);
				this.searchUrl = data.info.next;
				this.loading = false; // Atribuído valor false para indicar que a solicitação foi concluída
			});
		});		
	}

	// Método para detalhar um personagem quando clicar em Details
	goToDetails(entity: any) {
		this.router.navigate([this.searchUrl, entity.id]);
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
		if (nearEnd) {
			this.checkLoadCharacters();
		}
	}
}