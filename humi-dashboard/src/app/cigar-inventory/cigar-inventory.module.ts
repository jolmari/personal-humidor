import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CigarInventoryRouting } from './cigar-inventory-routing.module';
import { CigarInventoryComponent } from './cigar-inventory.component';
import { CigarDetailsComponent } from './cigar-details/cigar-details.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CigarInventoryRouting
    ],
    declarations: [
        CigarInventoryComponent,
        CigarDetailsComponent
    ]
})

export class CigarInventoryModule {}
