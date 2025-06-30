import { Injectable } from '@angular/core';
import { Meal } from '../interfaces/Meal';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  meals: Meal[] = []

  constructor() { }

  adicionarMeal(meal: Meal) {
    this.meals.push(meal);
    console.log('Meal added successfully!', meal);
    localStorage.setItem('meals', JSON.stringify(this.meals));
  }

  getMeals(): Meal[] {
    const mealsFromStorage = localStorage.getItem('meals');
    if (mealsFromStorage) {
      this.meals = JSON.parse(mealsFromStorage);
    }
    return this.meals;
  }
}
