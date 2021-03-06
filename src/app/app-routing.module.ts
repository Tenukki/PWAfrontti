import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormViewComponent } from './components/form-view/form-view.component';
import {CardsComponent} from "../app/components/cards/cards.component"
import {LoginComponent} from "./components/login/login.component"
import { RouterGuardGuard } from './security/router-guard.guard';

const routes: Routes = [
  { path: 'card', component: CardsComponent, canActivate:[RouterGuardGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'form', component:  FormViewComponent, canActivate:[RouterGuardGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

