import { Router } from '@angular/router';
import { ClassService } from './../services/class.service';
import { inject } from "@angular/core";

export const authGuard = () => {
  const authService = inject(ClassService);
  const router = inject(Router);

  if(!authService.getToken()){
    alert("Logueate primero")
   console.log("No estoy logado");
   return router.navigate(['/login'])
    
  }
  return true;
}