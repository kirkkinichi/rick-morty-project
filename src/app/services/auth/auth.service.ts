import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	isLoggedIn: boolean = false;

	constructor(private router: Router) {}


	// Verifica se usuário está Logado
	checkLogin(): boolean {
		this.isLoggedIn = !!localStorage.getItem('is-logged-in');
		return this.isLoggedIn;
	}

	// Função para realizar logout do usuário
	logout(): void {
		localStorage.setItem('is-logged-in', '');
		this.router.navigate(['/login']);		
		this.isLoggedIn = false;
	}
}