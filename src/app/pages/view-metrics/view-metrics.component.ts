import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MealsService } from '../../_services/meals.service';
import { CommonModule } from '@angular/common';
import { Meal } from '../../interfaces/Meal';


@Component({
  selector: 'app-view-metrics',
  imports: [RouterLink, CommonModule],
  templateUrl: './view-metrics.component.html',
  styleUrl: './view-metrics.component.css'
})
export class ViewMetricsComponent {
  metrics: any;
  porcent: number = 0;
  totalMeals: number = 0;
  totalInDietMeals: number = 0;
  totalOutDietMeals: number = 0;


  private mealsService: MealsService = inject(MealsService);

  ngOnInit() {

    this.getAllMetrics();

  }


  getAllMetrics() {
  this.mealsService.getMetrics().subscribe((metrics) => {
      const metric = metrics.metrics;
      this.metrics = metrics;
      this.totalMeals = metric.totalMeals;
      this.totalInDietMeals = metric.totalDietMeals;
      this.totalOutDietMeals = metric.totalNonDietMeals;
      this.porcent = metric.porcentageDietMeals;
  });
}
}