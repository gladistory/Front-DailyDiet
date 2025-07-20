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

  // deleteMeal(id: string): void {
  //   this.meals = this.meals.filter(meal => meal.id !== id);
  //   localStorage.setItem('meals', JSON.stringify(this.meals));
  // }


  getMealPercent() {
    const totalMeals = this.meals.length;
    const inDietMeals = this.meals.filter(meal => meal.diet).length;

    if (totalMeals === 0) {
      return this.porcent = 0;
    }

    return this.porcent = parseFloat(((inDietMeals / totalMeals) * 100).toFixed(2));
  }

  getTotalMeals() {
    return this.meals.length;
  }

  getTotalInDietMeals() {
    return this.meals.filter(meal => meal.diet).length;
  }

  getTotalOutDietMeals() {
    return this.meals.filter(meal => !meal.diet).length;
  }

  getBestSeries() {
    const mealsFromStorage = localStorage.getItem('meals');
    if (mealsFromStorage) {
      this.meals = JSON.parse(mealsFromStorage);
    }
    let bestSeries = 0;
    let currentSeries = 0;

    this.meals.forEach(meal => {
      if (meal.diet) {
        currentSeries++;
        if (currentSeries > bestSeries) {
          bestSeries = currentSeries;
        }
      } else {
        currentSeries = 0;
      }
    });

    return bestSeries;
  }

}
