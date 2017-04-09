import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { CigarInventoryRouting } from './cigar-inventory-routing.module';
import { CigarInventoryComponent } from './cigar-inventory.component';
import { CigarDetailsComponent } from './cigar-details/cigar-details.component';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        CigarInventoryRouting
    ],
    declarations: [
        CigarInventoryComponent,
        CigarDetailsComponent
    ]
})

export class CigarInventoryModule {}
