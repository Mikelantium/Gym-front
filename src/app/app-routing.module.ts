import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClasesComponent } from './pages/clases/clases.component';
import { EditClassComponent } from './pages/edit-class/edit-class.component';
import { ClaseComponent } from './pages/clase/clase.component';
import { AddClassComponent } from './pages/add-class/add-class.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './shared/guards/auth.guard';

const routes: Routes = [ {
  path: "", component: HomeComponent
}, 
{path: "clases", component: ClasesComponent
},
{path: "añadir", component: AddClassComponent, canActivate: [authGuard]
},
{path: "editar", component: EditClassComponent, canActivate: [authGuard]
},
{path: "usuarios", component: UsuariosComponent
},
{path: "clases/:id", component: ClaseComponent
},{
  path: "login", component: LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
