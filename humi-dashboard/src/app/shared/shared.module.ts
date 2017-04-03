import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingComponent } from './rating/rating.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RatingComponent
  ],
  exports: [
    RatingComponent,
    CommonModule
  ]
})
export class SharedModule { }
