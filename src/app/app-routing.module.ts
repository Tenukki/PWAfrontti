import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormViewComponent } from './components/form-view/form-view.component';
import {CardsComponent} from "../app/components/cards/cards.component"

const routes: Routes = [
  { path: 'card', component: CardsComponent },
  { path: 'form', component:  FormViewComponent},
  { path: '', redirectTo: '/card', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
