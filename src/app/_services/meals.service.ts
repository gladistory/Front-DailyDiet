import { Injectable } from '@angular/core';
import { Meal } from '../interfaces/Meal';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  meals: Meal[] = []
  porcent: number = 0;

  constructor() { }

  adicionarMeal(meal: Meal) {
    this.meals.push(meal);
    localStorage.setItem('meals', JSON.stringify(this.meals));
  }

  getMeals(): Meal[] {
    const mealsFromStorage = localStorage.getItem('meals');
    if (mealsFromStorage) {
      this.meals = JSON.parse(mealsFromStorage);
    }
    return this.meals;
  }

  getMealById(id: string): Meal | undefined {
    return this.meals.find(meal => meal.id === id);
  }

  deleteMeal(id: string): void {
    this.meals = this.meals.filter(meal => meal.id !== id);
    localStorage.setItem('meals', JSON.stringify(this.meals));
  }


  getMealPercent() {
    const totalMeals = this.meals.length;
    const inDietMeals = this.meals.filter(meal => meal.isInDiet).length;

    if (totalMeals === 0) {
      return this.porcent = 0;
    }

    return this.porcent = parseFloat(((inDietMeals / totalMeals) * 100).toFixed(2));
  }

  getTotalMeals() {
    return this.meals.length;
  }

  getTotalInDietMeals() {
    return this.meals.filter(meal => meal.isInDiet).length;
  }

  getTotalOutDietMeals() {
    return this.meals.filter(meal => !meal.isInDiet).length;
  }

  getBestSeries() {
    const mealsFromStorage = localStorage.getItem('meals');
    if (mealsFromStorage) {
      this.meals = JSON.parse(mealsFromStorage);
    }
    let bestSeries = 0;
    let currentSeries = 0;

    this.meals.forEach(meal => {
      if (meal.isInDiet) {
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
