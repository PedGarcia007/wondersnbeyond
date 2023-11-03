import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SpellsComponent } from './spells/spells.component';
import { DeitiesComponent } from './deities/deities.component';
import { PotionsComponent } from './potions/potions.component';
import { BeyondsComponent } from './beyonds/beyonds.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FindingsComponent } from './findings/findings.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component:RegisterComponent},
  { path: 'spells', component: SpellsComponent, },
  { path: 'deities', component: DeitiesComponent,},
  { path: 'potions', component: PotionsComponent,  },
  { path: 'beyonds', component: BeyondsComponent, },
  { path: 'findings', component: FindingsComponent,  },
  { path: '**', redirectTo: '/home' } 
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpellsComponent,
    DeitiesComponent,
    PotionsComponent,
    BeyondsComponent,
    LoginComponent,
    RegisterComponent,
    FindingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

