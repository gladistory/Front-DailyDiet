import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { FormsModule } from '@angular/forms';
import { Meal } from '../../interfaces/Meal';
import { HideNavComponent } from '../../components/hide-nav/hide-nav.component';
import { MealsService } from '../../_services/meals.service';


@Component({
  selector: 'app-create-meal',
  standalone: true,
  imports: [PrimaryButtonComponent, FormsModule, HideNavComponent],
  templateUrl: './create-meal.component.html',
  styleUrl: './create-meal.component.css'
})
export class CreateMealComponent {

  constructor(private router: Router, private mealsService: MealsService) { }

  meal: Meal = {
    name: '',
    description: '',
    date: '',
    time: '',
    isInDiet: ''
  };

  saveMeal() {

    const isDietBool = Boolean(this.meal.isInDiet === 'true' || this.meal.isInDiet === true);

    this.meal.isInDiet = isDietBool;

    this.mealsService.adicionarMeal(this.meal);

    this.clearForm()

    if (isDietBool === true) {
      this.router.navigate(['/is-diet']);
    } else if (isDietBool === false) {
      this.router.navigate(['/not-is-diet']);
    };
  }

  clearForm() {
    this.meal = {
      name: '',
      description: '',
      date: '',
      time: '',
      isInDiet: ''
    };
  }

}
