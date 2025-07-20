import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { FormsModule } from '@angular/forms';
import { Meal } from '../../interfaces/Meal';
import { MealsService } from '../../_services/meals.service';
import { inject } from '@angular/core';
import { flush } from '@angular/core/testing';


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
    id: '',
    name: '',
    description: '',
    data: '',
    created_at: '',
    diet: false
  };

  saveMeal() {
    if (!this.validateForm()) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }
   if (typeof this.meal.diet === 'string') {
      this.meal.diet = this.meal.diet === "true";
    } 

    this.mealsService.adicionarMeal(this.meal).subscribe({
      next: () => {
        if (this.meal.diet === true) {
          this.router.navigate(['/is-diet']);
        } else if (this.meal.diet === false) {
          this.router.navigate(['/not-is-diet']);
        }
      },
      error: (error) => {
        console.error('Error ao adicionar refeição:', error);
      }
    });
  }

  validateForm() {
    if (!this.meal.name || !this.meal.description || !this.meal.data || !this.meal.created_at || this.meal.diet === undefined) {
      return false;
    }
    return true;
  }

  clearForm() {
    this.meal = {
      id: '',
      name: '',
      description: '',
      data: '',
      created_at: '',
      diet: false
    };
  }

}
