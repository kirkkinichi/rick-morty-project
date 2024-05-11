import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnInit{

  userInput: string = '';
  faSearch = faSearch;

  constructor(private router: Router) { }

  onInputChanged() {
    this.router.navigate([], { queryParams: { inputParam: this.userInput } })
    sessionStorage.setItem("search-input", this.userInput);
  }

  ngOnInit():void {
    const localItem = sessionStorage.getItem("search-input")
    this.userInput = localItem || '';
    this.router.navigate([], { queryParams: { inputParam: this.userInput } })
  }
}
