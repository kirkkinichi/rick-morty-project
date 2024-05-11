import { Component } from '@angular/core';
import { Router } from '@angular/router';

const SIDEBAR_PAGES = ['/personagens', '/episodios', '/localizacoes'];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private router: Router) { }

  isSearchBarVisible():boolean {
    console.log(this.router)
    console.log(this.router.url)
    return SIDEBAR_PAGES.includes(this.router.url.split('?')[0])
  }
}
