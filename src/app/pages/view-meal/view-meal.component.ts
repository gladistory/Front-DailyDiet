import { Component, inject } from '@angular/core';
import { HideNavComponent } from '../../components/hide-nav/hide-nav.component';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { SecundaryButtonComponent } from '../../components/secundary-button/secundary-button.component';
import { MealsService } from '../../_services/meals.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from '../../interfaces/Meal';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from './deleteModal/delete/delete.component';




@Component({
  selector: 'app-view-meal',
  imports: [HideNavComponent, PrimaryButtonComponent, SecundaryButtonComponent],
  templateUrl: './view-meal.component.html',
  styleUrl: './view-meal.component.css'
})
export class ViewMealComponent {

  private mealsService: MealsService = inject(MealsService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private dialog: MatDialog = inject(MatDialog);
  private router: Router = inject(Router);

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
        meal.data = this.formatDate(meal.data);
        this.meal = meal;
      });
    }
  }

  navigateToEditMeal() {
    if (this.meal) {
      this.router.navigate(['/edit-meal', this.meal.id]);
    }
  }

  formatDate(dateString: string): string {
    const dateParts = dateString.split('.');
    if (dateParts.length === 3) {
      return `${dateParts[0]}/${dateParts[1]}/${dateParts[2]}`;
    }
    return dateString;
  }


}
