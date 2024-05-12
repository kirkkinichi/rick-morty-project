import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SIDEBAR_PAGES } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private router: Router) { }

  isSearchBarVisible():boolean {
    return SIDEBAR_PAGES.includes(this.router.url.split('?')[0])
  }
}
