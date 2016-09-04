import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { Cigar } from "../models/cigar";
import { CigarSearchService } from "../services/cigar-search.service";

@Component({
    selector: "my-dashboard",
    templateUrl: "views/dashboard.component.html"
})

export class DashboardComponent {
    selectedCigar: Cigar;

    constructor(private router: Router, private cigarSearchService: CigarSearchService) { }

    onSelected(cigar: Cigar):void {
        this.selectedCigar = cigar;
    }

    detailsClosed(cigar: Cigar):void {
        this.selectedCigar = null;
    }
}