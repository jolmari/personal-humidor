import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CigarInventoryComponent } from './cigar-inventory.component';
import { CigarDetailsComponent } from './cigar-details/cigar-details.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', redirectTo: 'inventory', pathMatch: 'full' },
    { path: 'inventory', component: CigarInventoryComponent,
      children: [
        { path: ':id', component: CigarDetailsComponent}
      ]
    }
  ])],
  exports: [RouterModule]
})

export class CigarInventoryRouting {}
