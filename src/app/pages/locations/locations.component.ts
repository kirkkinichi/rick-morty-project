import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent {

  locations: any[] = []; //Armazena personagens da API
  locationUrl: string | null = 'https://rickandmortyapi.com/api/location'; // Armazena a próxima página a ser carregada
  loading = false; //Indica o estado da solicitação HTTP

  //Solicitação HTTP
  constructor(private http: HttpClient) {
    this.checkLoadLocations();
  }

  //Carrega os personagens da API e veriffica se há uma solicitação HTTP em andamento
  checkLoadLocations() {    
    //Verifica se há uma solicitação em andamento / página para carregar
    if (this.loading || !this.locationUrl) {
      return;
    }

    // Inicia solicitação
    this.loading = true;

    // Solicitação GET para obter os personagens e atualizar com a URL da próxima página
    this.http.get(this.locationUrl).subscribe((data: any) => {

      this.locations = this.locations.concat(data.results);
      this.locationUrl = data.info.next;
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

    //Chama o método checkLoadLocations() para carregar mais personagens
    if (nearEnd) {
      this.checkLoadLocations();
    }
  }
}
