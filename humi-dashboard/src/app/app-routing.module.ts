import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { CigarInventoryComponent } from './cigar-inventory/cigar-inventory.component';
//import { AddCigarMainComponent } from '../components/addcigarform/add-cigar-main.component';

export const routes: Routes = [
    // { path: '', redirectTo: '', pathMatch: 'full'}
    { path: '', redirectTo: 'inventory', pathMatch: 'full' }
    //{ path: 'create', loadChildren: 'app/cigar-inventory/cigar-inventory.module#CigarInventoryModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
