import { Component } from '@angular/core';

import { AuthGuard } from '../../guards/auth/auth.guard';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  // constructor(private authGuard: typeof AuthGuard) { }
}
