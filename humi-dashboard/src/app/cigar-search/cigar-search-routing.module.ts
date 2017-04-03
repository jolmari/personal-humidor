import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CigarSearchComponent } from "./cigar-search.component";

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: CigarSearchComponent }
  ])],
  exports: [RouterModule]
})

export class CigarSearchRouting {}
