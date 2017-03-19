﻿import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CigarInventoryComponent } from './cigar-inventory.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'inventory', component: CigarInventoryComponent }
  ])],
  exports: [RouterModule]
})

export class CigarInventoryRouting {}
