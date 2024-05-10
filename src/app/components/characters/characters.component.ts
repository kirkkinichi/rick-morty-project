import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-characters',
	templateUrl: './characters.component.html',
	styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

	characters: any[] = []; // Armazena personagens da API
	characterUrl: string | null = 'https://rickandmortyapi.com/api/character'; // Armazena a próxima página a ser carregada
	loading = false; // Indica o estado da solicitação HTTP

	// Solicitação HTTP
	constructor(private http: HttpClient, private router: Router) {
		this.checkLoadCharacters();
	}

	// Carrega os personagens da API e verifica se há uma solicitação HTTP em andamento
	checkLoadCharacters() {    
		// Verifica se há uma solicitação em andamento / página para carregar
		if (this.loading || !this.characterUrl) {
			return;
		}
		// Inicia solicitação
		this.loading = true;

		// Solicitação GET para obter os personagens e atualizar com a URL da próxima página
		this.http.get(this.characterUrl).subscribe((data: any) => {

			this.characters = this.characters.concat(data.results);
			this.characterUrl = data.info.next;
			this.loading = false; // Atribuído valor false para indicar que a solicitação foi concluída
		});
	}

	// Método para detalhar um personagem quando clicar em Details
	detalharPersonagem(character: any) {
		this.router.navigate(['/personagem-detalhes', character.id]);
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
