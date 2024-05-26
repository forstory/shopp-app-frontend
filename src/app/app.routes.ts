// src/app/app.routes.ts
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [  // 将 `const` 改为 `export const` 来导出 `routes`
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent }, 
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

export const AppRoutes = RouterModule.forRoot(routes);
