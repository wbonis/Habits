import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitsListComponent } from './habits-list.component';
import { HabitsListRoutingModule } from './habits-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    HabitsListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    HabitsListComponent
  ]
})
export class HabitsListModule { }
