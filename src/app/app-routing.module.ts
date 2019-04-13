import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnoncesComponent } from './annonces/annonces.component';
import { MandataireComponent } from './mandataire/mandataire.component';
import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
  { path: '', component: DataTableComponent },
  { path: 'Annonces', component: AnnoncesComponent },
  { path: 'mandataire/:id', component: MandataireComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
