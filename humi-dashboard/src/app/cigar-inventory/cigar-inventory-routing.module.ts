import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CigarInventoryComponent } from './cigar-inventory.component';
import { CigarDetailsComponent } from './cigar-details/cigar-details.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: CigarInventoryComponent },
    { path: 'inventory/:id', component: CigarDetailsComponent }
  ])],
  exports: [RouterModule]
})

export class CigarInventoryRouting {}
