import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CigarInventoryRouting } from './cigar-inventory-routing.module';
import { CigarInventoryComponent } from './cigar-inventory.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CigarInventoryRouting
    ],
    declarations: [
        CigarInventoryComponent
    ]
})

export class CigarInventoryModule {}
