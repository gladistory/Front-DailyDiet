import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MealsService } from '../../_services/meals.service';
import { Meal } from '../../interfaces/Meal';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-percent',
  imports: [RouterLink, CommonModule],
  templateUrl: './percent.component.html',
  styleUrl: './percent.component.css'
})
export class PercentComponent {
  @Input() link: string = '';

  meals: Meal[] = [];

  porcent: number = 0;

  constructor(private mealsService: MealsService) {
  }

  ngOnInit() {
    this.meals = this.mealsService.getMeals();
    this.porcent = this.mealsService.getMealPercent();
  }

}
