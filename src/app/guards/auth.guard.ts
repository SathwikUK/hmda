import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  
  if (authService.isAuthenticated()) {
    return true;
  } else {
    console.log('AuthGuard: User not authenticated, redirecting to login');
    authService.redirectToLogin();
    return false;
  }
};