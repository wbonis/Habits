import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitsEditComponent } from './habits-edit.component';
import { HabitsEditRoutingModule } from './habits-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    HabitsEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    HabitsEditComponent
  ]
})
export class HabitsEditModule { }
