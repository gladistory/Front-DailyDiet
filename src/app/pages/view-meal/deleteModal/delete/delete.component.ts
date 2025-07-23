import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MealsService } from '../../../../_services/meals.service';
import { Router } from '@angular/router';
import { Meal } from '../../../../interfaces/Meal';
import { PrimaryButtonComponent } from '../../../../components/primary-button/primary-button.component';
import { SecundaryButtonComponent } from '../../../../components/secundary-button/secundary-button.component';

@Component({
  selector: 'app-delete',
  imports: [MatButtonModule, MatDialogModule, PrimaryButtonComponent, SecundaryButtonComponent],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {

  meal: Meal | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Meal,
    private mealsService: MealsService,
    private router: Router,
    private dialogRef: MatDialogRef<DeleteComponent>
  ) {
    this.meal = data;
  }

 deleteMeal() {
  if (this.meal) {
    this.mealsService.deleteMeal(this.meal.id).subscribe({
      next: () => {
        this.dialogRef.close();
        this.router.navigate(['/home']);
      },
      error: (err) => {
        // Aqui você pode exibir uma mensagem de erro se quiser
        console.error('Erro ao deletar refeição:', err);
      }
    });
   }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
