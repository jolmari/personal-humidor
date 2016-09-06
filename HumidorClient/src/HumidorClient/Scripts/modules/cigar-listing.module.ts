import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MaterializeDirective } from "angular2-materialize";

import { DashboardComponent } from "../components/dashboard.component";
import { RatingComponent } from "../components/rating.component";
import { CigarDetailsComponent } from "../components/cigar-details.component";
import { CigarSearchComponent } from "../components/cigar-search.component";
import { CigarsComponent } from "../components/cigars.component";

import { CigarService } from "../services/cigar.service";
import { CigarSearchService } from "../services/cigar-search.service";
import { EnvironmentService } from "../services/environment.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        DashboardComponent,
        CigarDetailsComponent,
        CigarSearchComponent,
        RatingComponent,
        CigarsComponent,
        MaterializeDirective
    ],
    providers: [
        CigarService,
        CigarSearchService,
        EnvironmentService
    ]
})

export class CigarListingModule {}
