import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	private userData = {
		username: 'admin',
		password: 'admin',
		email: 'admin@admin.com'
	};

	constructor() { }

	login(username: string, password: string): Observable<any> {
		console.log(username);
		console.log(password);
		if (username === this.userData.username && password === this.userData.password) {
			localStorage.setItem('is-logged-in', '1');
			return of({ success: true, message: 'Login successful' });
		} else {
			localStorage.setItem('is-logged-in', '');
			return of({ success: false, message: 'Invalid username or password' });
		}
	}

	getUserData(): Observable<any> {
		return of({ name: 'admin', email: 'admin@admin.com' });
	}
}
