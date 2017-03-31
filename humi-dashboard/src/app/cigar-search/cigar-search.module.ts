import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CigarSearchRouting } from './cigar-search-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CigarSearchRouting
  ],
  declarations: []
})
export class CigarSearchModule { }
