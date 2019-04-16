
import {MatButtonModule, MatCheckboxModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { AnnoncesService } from './annonces.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MandataireComponent } from './mandataire/mandataire.component';
import { MandataireService } from './mandataire.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableComponent } from './data-table/data-table.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnoncesComponent,
    MandataireComponent,
    DataTableComponent,
    AuthentificationComponent,
    NavbarComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,


  ],
  providers: [AnnoncesService, MandataireService,LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
