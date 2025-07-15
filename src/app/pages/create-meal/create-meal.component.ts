import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { FormsModule } from '@angular/forms';
import { Meal } from '../../interfaces/Meal';
import { MealsService } from '../../_services/meals.service';
import { inject } from '@angular/core';


@Component({
  selector: 'app-create-meal',
  standalone: true,
  imports: [PrimaryButtonComponent, FormsModule, RouterLink],
  templateUrl: './create-meal.component.html',
  styleUrl: './create-meal.component.css'
})
export class CreateMealComponent {

  constructor(private router: Router) { }

  private mealsService: MealsService = inject(MealsService);

  meal: Meal = {
    name: '',
    description: '',
    data: '',
    time: '',
    isInDiet: ''
  };

  saveMeal() {
    if (!this.validateForm()) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    const isDietBool = Boolean(this.meal.isInDiet === 'true' || this.meal.isInDiet === true);

    const mealToSend: any = {
      ...this.meal,
      diet: isDietBool
    };
    delete mealToSend.isInDiet;

    this.mealsService.adicionarMeal(mealToSend).subscribe({
      next: () => {
        this.clearForm();

        if (isDietBool === true) {
          this.router.navigate(['/is-diet']);
        } else if (isDietBool === false) {
          this.router.navigate(['/not-is-diet']);
        }
      },
      error: (error) => {
        console.error('Error ao adicionar refeição:', error);
      }
    });
  }

  validateForm() {
    if (!this.meal.name || !this.meal.description || !this.meal.data || !this.meal.time || this.meal.isInDiet === '') {
      return false;
    }
    return true;
  }

  clearForm() {
    this.meal = {
      name: '',
      description: '',
      data: '',
      time: '',
      isInDiet: ''
    };
  }

}
