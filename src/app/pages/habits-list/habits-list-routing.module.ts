import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HabitsListComponent } from './habits-list.component';

const routes: Routes = [
  {
    path: '',
    component: HabitsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitsListRoutingModule { }
