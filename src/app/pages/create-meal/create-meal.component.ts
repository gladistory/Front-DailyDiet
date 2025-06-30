import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { FormsModule } from '@angular/forms';
import { Meal } from '../../interfaces/Meal';
import { HideNavComponent } from '../../components/hide-nav/hide-nav.component';


@Component({
  selector: 'app-create-meal',
  standalone: true,
  imports: [PrimaryButtonComponent, FormsModule, HideNavComponent],
  templateUrl: './create-meal.component.html',
  styleUrl: './create-meal.component.css'
})
export class CreateMealComponent {

  constructor(private router: Router) { }

  meal: Meal = {
    name: '',
    description: '',
    date: '',
    time: '',
    isInDiet: ''
  };

  saveMeal() {
    console.log('Meal saved successfully! ', this.meal);

    const isDietBool = Boolean(this.meal.isInDiet === 'true' || this.meal.isInDiet === true);

    if (isDietBool === true) {
      this.router.navigate(['/is-diet']);
    } else if (isDietBool === false) {
      this.router.navigate(['/not-is-diet']);
    }
  }

}
