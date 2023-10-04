import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { NotepadComponent } from './notepad/notepad.component';


@NgModule({
  declarations: [
    NotepadComponent
  ],
  imports: [
    CommonModule,
    FirstRoutingModule
  ],
  exports: [
    NotepadComponent
  ]
})
export class FirstModule { }
