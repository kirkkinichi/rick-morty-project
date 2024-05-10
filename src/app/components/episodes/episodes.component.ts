import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss'
})
export class EpisodesComponent {

  episodes: any[] = []; //Armazena personagens da API
  episodeUrl: string | null = 'https://rickandmortyapi.com/api/episode'; // Armazena a próxima página a ser carregada
  loading = false; //Indica o estado da solicitação HTTP

  //Solicitação HTTP
  constructor(private http: HttpClient) {
    this.checkLoadEpisodes();
  }

  //Carrega os personagens da API e veriffica se há uma solicitação HTTP em andamento
  checkLoadEpisodes() {    
    //Verifica se há uma solicitação em andamento / página para carregar
    if (this.loading || !this.episodeUrl) {
      return;
    }

    // Inicia solicitação
    this.loading = true;

    // Solicitação GET para obter os personagens e atualizar com a URL da próxima página
    this.http.get(this.episodeUrl).subscribe((data: any) => {

      this.episodes = this.episodes.concat(data.results);
      this.episodeUrl = data.info.next;
      this.loading = false; // Atribuído valor false para indicar que a solicitação foi concluída
    });
  }

  //Método chamado ao ocorrer o rolamento / scroll na janela
  @HostListener('window:scroll', ['$event'])
  scrollAction() {

    //Variáveis para calcular o scroll da página
    const height = window.innerHeight;
    const scroll = window.scrollY;
    const totalHeight = document.body.offsetHeight;

    //Calculo para verificar se o usuário está próximo ao fim da página, a uma distância de 200 pixels para garantir que a detecção aconteça antes do final da página
    const nearEnd = height + scroll >= totalHeight - 200;

    //Chama o método checkLoadEpisodes() para carregar mais personagens
    if (nearEnd) {
      this.checkLoadEpisodes();
    }
  }
}
