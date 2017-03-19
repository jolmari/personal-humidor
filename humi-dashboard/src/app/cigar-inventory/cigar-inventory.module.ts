﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CigarInventoryRouting } from './cigar-inventory-routing.module';
import { CigarInventoryComponent } from './cigar-inventory.component';

//import { RatingComponent } from "../components/rating.component";
//import { CigarDetailsComponent } from "../components/cigar-details.component";
//import { CigarSearchComponent } from "../components/cigar-search.component";
//import { CigarsComponent } from "../components/cigars.component";

//import { CigarService } from "../services/cigar.service";
//import { CigarSearchService } from "../services/cigar-search.service";
//import { EnvironmentService } from "../services/environment.service";

//import { AddCigarModule } from "./add-cigar.module";
//import { cigarInventoryRouting } from "../routes/cigar-inventory.routes";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CigarInventoryRouting
        //AddCigarModule,
        //cigarInventoryRouting
    ],
    declarations: [
        CigarInventoryComponent,
        //CigarDetailsComponent,
        //CigarSearchComponent,
        //RatingComponent,
        //CigarsComponent
    ],
    providers: [
        //CigarService,
        //CigarSearchService,
        //EnvironmentService
    ]
})

export class CigarInventoryModule {}