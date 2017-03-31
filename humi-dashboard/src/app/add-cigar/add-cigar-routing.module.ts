import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AddCigarComponent } from './add-cigar.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: AddCigarComponent }
  ])],
  exports: [RouterModule]
})

export class AddCigarRouting {}
