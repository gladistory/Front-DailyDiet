import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { Meal } from '../../interfaces/Meal';
import { MealsService } from '../../_services/meals.service';
import { inject } from '@angular/core';
import { flush } from '@angular/core/testing';


@Component({
  selector: 'app-create-meal',
  standalone: true,
  imports: [PrimaryButtonComponent, FormsModule, RouterLink, NgxMaskDirective],
  templateUrl: './create-meal.component.html',
  styleUrl: './create-meal.component.css'
})
export class CreateMealComponent {

  private router: Router = inject(Router);

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

    this.meal.data = this.formatDate(this.meal.data);

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
    if (!this.meal.name || !this.meal.description || !this.meal.data || this.meal.diet === undefined) {
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

  formatDate(dateString: string): string {
    // Formata a data para dd.MM.yyy mesmo se vier sem pontos
    let data = dateString.replace(/\./g, '');
    if (data && /^\d{8}$/.test(data)) {
      // Se vier 8 dígitos juntos, ex: 14022025
      data = `${data.slice(0,2)}.${data.slice(2,4)}.${data.slice(4,8)}`;
    } else if (data && /^\d{2}\.\d{2}\.\d{2}$/.test(data)) {
      // Se vier dd.MM.yy, converte para dd.MM.yyy
      const parts = data.split('.');
      data = `${parts[0]}.${parts[1]}.20${parts[2]}`;
    }
    return data;
  }

}
