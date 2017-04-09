import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'inventory', pathMatch: 'full'},
    { path: 'inventory', loadChildren: 'app/cigar-inventory/cigar-inventory.module#CigarInventoryModule' },
    { path: 'new', loadChildren: 'app/add-cigar/add-cigar.module#AddCigarModule' },
    { path: 'search', loadChildren: 'app/cigar-search/cigar-search.module#CigarSearchModule' },
    { path: 'humidor', loadChildren: 'app/my-humidor/my-humidor.module#MyHumidorModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
