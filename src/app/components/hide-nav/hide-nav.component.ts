import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MealsService } from '../../_services/meals.service';

@Component({
  selector: 'app-hide-nav',
  imports: [RouterLink],
  templateUrl: './hide-nav.component.html',
  styleUrl: './hide-nav.component.css'
})
export class HideNavComponent {

  @Input() title: string = '';

  meals: any[] = [];
  isDiet: boolean = true;

  constructor(private mealsService: MealsService) { }

  ngOnInit() {
    this.meals = this.mealsService.getMeals();
  }

}
