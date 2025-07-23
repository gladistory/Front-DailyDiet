import { Component, Input, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MealsService } from '../../_services/meals.service';
import { Meal } from '../../interfaces/Meal';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-percent',
  imports: [RouterLink, CommonModule],
  templateUrl: './percent.component.html',
  styleUrl: './percent.component.css'
})
export class PercentComponent {
  @Input() link: string = '';
  @Input() percent: number = 0;
}
