import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    return this.router.url !== '/home'
  }
}
