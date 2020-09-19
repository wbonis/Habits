import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HabitsEditComponent } from './habits-edit.component';

const routes: Routes = [
  {
    path: '',
    component: HabitsEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitsEditRoutingModule { }
