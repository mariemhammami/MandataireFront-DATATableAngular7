import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnoncesComponent } from './annonces/annonces.component';
import { MandataireComponent } from './mandataire/mandataire.component';
import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AuthGuard } from './auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'logout', component: LogoutComponent },

  { path: '', component: AuthentificationComponent },
  { path: 'dataTable', component: DataTableComponent , canActivate : [AuthGuard] },
  { path: 'Annonces', component: AnnoncesComponent },
  { path: 'mandataire/:id', component: MandataireComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
