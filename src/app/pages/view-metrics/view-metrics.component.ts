import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MealsService } from '../../_services/meals.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-metrics',
  imports: [RouterLink, CommonModule],
  templateUrl: './view-metrics.component.html',
  styleUrl: './view-metrics.component.css'
})
export class ViewMetricsComponent {

  porcent: number = 0;
  totalMeals: number = 0;
  totalInDietMeals: number = 0;
  totalOutDietMeals: number = 0;
  bestSeries: number = 0;

  constructor(private mealsService: MealsService) { }

  ngOnInit() {

    this.getAllMetrics();

  }


  getAllMetrics() {
    this.porcent = this.mealsService.getMealPercent();
    this.totalMeals = this.mealsService.getTotalMeals();
    this.totalInDietMeals = this.mealsService.getTotalInDietMeals();
    this.totalOutDietMeals = this.mealsService.getTotalOutDietMeals();
    this.bestSeries = this.mealsService.getBestSeries();
  }

}
