import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	// Dados do usuário para login
	private userData = {
		username: 'admin',
		password: 'admin',
		email: 'admin@admin.com'
	};

	constructor() { }

	// Função para validação do login
	login(username: string, password: string): Observable<any> {
		if (username === this.userData.username && password === this.userData.password) {
			localStorage.setItem('is-logged-in', '1');
			return of({ success: true, message: 'Login successful' });
		} else {
			localStorage.setItem('is-logged-in', '');
			return of({ success: false, message: 'Invalid username or password' });
		}
	}

	// GET dados do usuário
	getUserData(): Observable<any> {
		return of({ name: 'admin', email: 'admin@admin.com' });
	}
}
