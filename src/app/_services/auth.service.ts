import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl + '/users'; // URL da API de autenticação
  private http = inject(HttpClient);
  private router = inject(Router);

  login(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email });
  }

  setHeaders(): HttpHeaders | undefined {
    const sessionId = localStorage.getItem('sessionId') || '';
    return sessionId ? new HttpHeaders({ 'sessionId': sessionId }) : undefined;
  }

  register(email: string, name: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { email, name });
  }

  getUserInfo(): Observable<any> {
    this.setHeaders();
    return this.http.get(`${this.apiUrl}`, { headers: this.setHeaders() });
  }

  logout() {
    localStorage.removeItem('sessionId');
    this.router.navigate(['/login']);
}

}
  