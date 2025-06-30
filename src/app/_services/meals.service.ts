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
}
