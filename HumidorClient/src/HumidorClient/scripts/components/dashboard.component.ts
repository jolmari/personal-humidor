import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { Cigar } from "../models/cigar";
import { CigarSearchService } from "../services/cigar-search.service";
import { CigarSearchComponent } from "./cigar-search.component";
import { CigarDetailsComponent } from "./cigar-details.component";

@Component({
    selector: "my-dashboard",
    templateUrl: "views/dashboard.component.html",
    directives: [CigarSearchComponent, CigarDetailsComponent]
})

export class DashboardComponent {
    selectedCigar: Cigar;

    constructor(private router: Router, private cigarSearchService: CigarSearchService) { }

    onSelected(cigar: Cigar) {
        this.selectedCigar = cigar;
    }

    detailsClosed(cigar: Cigar) {
        this.selectedCigar = null;
    }
}