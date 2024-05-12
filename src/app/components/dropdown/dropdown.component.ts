import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {

  userData: any;

  constructor(private apiService: ApiService, private authService: AuthService) {
    this.apiService.getUserData()
      .subscribe(
        (userData) => {
          console.log('User Data:', userData);
          this.userData = userData;
        },
        (error) => console.error('Error fetching user data:', error)
      );
  }

  logout() {
    this.authService.logout();
  }


}
