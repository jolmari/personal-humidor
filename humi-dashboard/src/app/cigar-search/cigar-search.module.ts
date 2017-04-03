import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { CigarSearchRouting } from './cigar-search-routing.module';
import { CigarSearchService } from './services/cigar-search.service';
import { CigarSearchComponent } from "./cigar-search.component";

@NgModule({
  imports: [
    SharedModule,
    CigarSearchRouting,
    ReactiveFormsModule
  ],
  declarations: [
    CigarSearchComponent
  ],
  providers: [
    CigarSearchService
  ]
})
export class CigarSearchModule { }
