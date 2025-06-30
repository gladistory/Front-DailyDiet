import { Component } from '@angular/core';
import { PercentComponent } from "../../components/percent/percent.component";
import { RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { MealsService } from '../../_services/meals.service';
import { Meal } from '../../interfaces/Meal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [PercentComponent, PrimaryButtonComponent, RouterLink, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  meals: Meal[] = [];
  mealsByDate: { [date: string]: Meal[] } = {};

  constructor(private mealsService: MealsService) { }

  ngOnInit() {
    this.meals = this.mealsService.getMeals();
    this.mealsByDate = this.groupMealsByDate(this.meals);
  }

  private groupMealsByDate(meals: Meal[]): { [date: string]: Meal[] } {
    return meals.reduce((acc, meal) => {
      if (!acc[meal.date]) {
        acc[meal.date] = [];
      }
      acc[meal.date].push(meal);
      return acc;
    }, {} as { [date: string]: Meal[] });
  }

}
