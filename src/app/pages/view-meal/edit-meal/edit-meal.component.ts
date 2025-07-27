import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { Meal } from '../../../interfaces/Meal';
import { inject } from '@angular/core';
import { MealsService } from '../../../_services/meals.service';

@Component({
  selector: 'app-edit-meal',
  imports: [FormsModule, PrimaryButtonComponent, RouterLink, NgxMaskDirective],
  templateUrl: './edit-meal.component.html',
  styleUrl: './edit-meal.component.css'
})
export class EditMealComponent {

  
  private router: Router = inject(Router);

  private mealsService: MealsService = inject(MealsService);

  ngOnInit() {
    const id = this.router.url.split('/').pop();
    if (id) {
      this.mealsService.getMealById(id).subscribe((meal: Meal) => {
        this.meal = meal;
      });
    }
  }

  meal: Meal = {
    id: '',
    name: '',
    description: '',
    data: '',
    hora: '',
    created_at: '',
    diet: false
  };

  saveMeal() {
    if (!this.validateForm()) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    this.meal.data = this.formatDate(this.meal.data);

    this.mealsService.editMeals(this.meal).subscribe({
      next: () => {
        this.router.navigate(['/view-meal/' + this.meal.id]);
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
      hora: '',
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
