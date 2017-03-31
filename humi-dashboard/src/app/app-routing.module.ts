import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full'},
    { path: 'inventory', loadChildren: 'app/cigar-inventory/cigar-inventory.module#CigarInventoryModule' },
    { path: 'new', loadChildren: 'app/add-cigar/add-cigar.module#AddCigarModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
