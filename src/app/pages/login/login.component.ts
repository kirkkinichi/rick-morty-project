import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

	username: string = '';
	password: string = '';
	loginError: string = '';

	constructor(private apiService: ApiService, private authService: AuthService, private router: Router) { }

	login(): void {
		this.apiService.login(this.username, this.password)
			.subscribe(
				(response) => {
					if (response.success) {
						this.apiService.getUserData()
							.subscribe(
								(userData) => {
									console.log('User Data:', userData);
									this.router.navigate(['/home']);
								},
								(error) => console.error('Error fetching user data:', error)
							);
					} else {
						// Login failed, display error message
						this.loginError = response.message;
					}
				},
				(error) => console.error('Login error:', error)
			);
	}

	ngOnInit(): void {
		if (localStorage.getItem('is-logged-in')) {
			this.router.navigate(['/home']);
		}
	}
}
