import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const sessionId = localStorage.getItem('sessionId');
  if (!sessionId) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
