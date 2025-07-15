import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MealsService } from '../../_services/meals.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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

  constructor(private mealsService: MealsService, private route: ActivatedRoute) { }

  ngOnInit() {
    // const mealId = this.route.snapshot.paramMap.get('id');
    // if (mealId) {
    //   this.meal = this.mealsService.getMealById(mealId);
    // }

  }
}
