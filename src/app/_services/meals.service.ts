import { Injectable, inject } from '@angular/core';
import { Meal } from '../interfaces/Meal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class MealsService {

  meals: Meal[] = []
  porcent: number = 0;

  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl + '/meals';
  private authService = inject(AuthService);


  adicionarMeal(meal: Meal): Observable<Meal> {
    const headers = this.authService.setHeaders();
    return this.http.post<Meal>(this.apiUrl, meal, { headers });
  }
  
  getMeals(): Observable<Meal[]> {
    const headers = this.authService.setHeaders();
    return this.http.get<Meal[]>(this.apiUrl, { headers });
  }

  getMealById(id: string): Observable<Meal> {
    const headers = this.authService.setHeaders();
    return this.http.get<Meal>(`${this.apiUrl}/${id}`, { headers });
  }

  getMetrics(): Observable<any> {
    const headers = this.authService.setHeaders();
    return this.http.get<any>(`${this.apiUrl}/metrics`, { headers });
  }

  deleteMeal(id: string): Observable<void> {
    const headers = this.authService.setHeaders();
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers });
  }

}
