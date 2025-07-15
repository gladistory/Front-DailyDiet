import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users'; // URL da API de autenticação
  private http = inject(HttpClient);

  login(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email });
  }

  setHeaders(): HttpHeaders | undefined {
    const sessionId = localStorage.getItem('sessionId') || '';
    return sessionId ? new HttpHeaders({ 'sessionId': sessionId }) : undefined;
  }

}
  