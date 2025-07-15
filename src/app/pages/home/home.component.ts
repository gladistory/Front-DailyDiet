import { Component, inject } from '@angular/core';
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
  mealsByDate: { [data: string]: Meal[] } = {};

  private mealsService: MealsService = inject(MealsService);

  ngOnInit() {
    this.getAllMeals();
  }

  private groupMealsByDate(meals: Meal[]): { [data: string]: Meal[] } {
    return meals.reduce((acc, meal) => {
      if (!acc[meal.data]) {
        acc[meal.data] = [];
      }
      acc[meal.data].push(meal);
      return acc;
    }, {} as { [data: string]: Meal[] });
  }

  getAllMeals() {
    this.mealsService.getMeals().subscribe((meals: Meal[]) => {
      this.meals = meals;
      this.mealsByDate = this.groupMealsByDate(this.meals);
    });
  }

}
