import { Component } from '@angular/core';
import { HideNavComponent } from '../../components/hide-nav/hide-nav.component';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { SecundaryButtonComponent } from '../../components/secundary-button/secundary-button.component';
import { MealsService } from '../../_services/meals.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from '../../interfaces/Meal';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DeleteComponent } from './deleteModal/delete/delete.component';




@Component({
  selector: 'app-view-meal',
  imports: [HideNavComponent, PrimaryButtonComponent, SecundaryButtonComponent],
  templateUrl: './view-meal.component.html',
  styleUrl: './view-meal.component.css'
})
export class ViewMealComponent {

  constructor(private mealsService: MealsService, private route: ActivatedRoute, private dialog: MatDialog) { }

  meal: Meal | undefined;

  ngOnInit() {
    this.getMealById();
  }

  deleteModal() {
    this.dialog.open(DeleteComponent, {
      data: this.meal,
    });
  }

  getMealById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mealsService.getMealById(id).subscribe((meal: Meal) => {
        this.meal = meal;
      });
    }
  }


}
