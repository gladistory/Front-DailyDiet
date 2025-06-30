import { Component } from '@angular/core';
import { HideNavComponent } from '../../components/hide-nav/hide-nav.component';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { SecundaryButtonComponent } from '../../components/secundary-button/secundary-button.component';
import { MealsService } from '../../_services/meals.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from '../../interfaces/Meal';

@Component({
  selector: 'app-view-meal',
  imports: [HideNavComponent, PrimaryButtonComponent, SecundaryButtonComponent],
  templateUrl: './view-meal.component.html',
  styleUrl: './view-meal.component.css'
})
export class ViewMealComponent {

  constructor(private mealsService: MealsService, private route: ActivatedRoute, private router: Router) { }

  meal: Meal | undefined;

  ngOnInit() {
    const mealId = this.route.snapshot.paramMap.get('id');
    if (mealId) {
      this.meal = this.mealsService.getMealById(mealId);
    }
  }

  deleteMeal() {
    if (this.meal) {
      alert(`Você realmente deseja excluir a refeição ${this.meal.name}?`);
      this.mealsService.deleteMeal(this.meal.id);
      this.router.navigate(['/home']);
    }
  }

}
