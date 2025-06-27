import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { FormsModule } from '@angular/forms';
import { Meal } from '../../interfaces/Meal';

@Component({
  selector: 'app-create-meal',
  standalone: true,
  imports: [RouterLink, PrimaryButtonComponent, FormsModule],
  templateUrl: './create-meal.component.html',
  styleUrl: './create-meal.component.css'
})
export class CreateMealComponent {

  meal: Meal = {
    name: '',
    description: '',
    date: '',
    time: '',
    isInDiet: false
  };

  saveMeal() {
    console.log('Meal saved successfully! ', this.meal);
  }

}
