import { Component, inject } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MealsService } from '../../_services/meals.service';
import { CommonModule } from '@angular/common';
import { Meal } from '../../interfaces/Meal';

@Component({
  selector: 'app-hide-nav',
  imports: [RouterLink, CommonModule],
  templateUrl: './hide-nav.component.html',
  styleUrl: './hide-nav.component.css'
})
export class HideNavComponent {

  @Input() title: string = '';

  meal: Meal | undefined;
  isDiet: boolean = false;

  private mealsService: MealsService = inject(MealsService);
  private route: ActivatedRoute = inject(ActivatedRoute);


  ngOnInit() {
    this.isDietMeal();
  }

  isDietMeal() {
    this.mealsService.getMealById(this.route.snapshot.params['id']).subscribe({
      next: (meal) => {
        this.meal = meal;
        this.isDiet = this.meal?.diet || false;
      },
      error: (error) => {
        console.error('Error fetching meal:', error);
      }
    });
  }

}

