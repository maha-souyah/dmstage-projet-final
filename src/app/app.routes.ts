import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminDemandesComponent } from './pages/admin-demandes/admin-demandes.component';

export const routes: Routes = [
  { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'admin/demandes', component: AdminDemandesComponent },
];