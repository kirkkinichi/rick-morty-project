import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 

export const SIDEBAR_PAGES = ['/personagens', '/episodios', '/localizacoes'];

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnInit{

  userInput: string = '';
  faSearch = faSearch;

  constructor(private router: Router, private route: ActivatedRoute) { }

  onInputChanged() {
    this.router.navigate([], { queryParams: { inputParam: this.userInput } })
    sessionStorage.setItem("search-input", this.userInput);
  }

  ngOnInit():void {
    this.route.queryParams.subscribe(params => {
      const foundParamInput = params['inputParam']
      if (foundParamInput) sessionStorage.setItem("search-input", foundParamInput)
      const localItem = sessionStorage.getItem("search-input")
      this.userInput = localItem || '';
      this.router.navigate([], { queryParams: { inputParam: this.userInput } })
    });  
  }
}
