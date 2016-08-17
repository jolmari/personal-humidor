import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { Cigar } from "../models/cigar";
import { CigarSearchService } from "../services/cigar-search.service";
import { CigarSearchComponent } from "./cigar-search.component";
import { WikipediaComponent } from "./wikipedia/wikipedia.component";

@Component({
    selector: "my-dashboard",
    templateUrl: "views/dashboard.component.html",
    directives: [CigarSearchComponent, WikipediaComponent],
    providers: [CigarSearchService]
})

export class DashboardComponent {
    cigars: Cigar[] = [];
    error: any;
    
    constructor(private router: Router, private cigarSearchService: CigarSearchService) {}

    goToDetail(cigar: Cigar): void {
        const link:any = ["/details", cigar.id];
        this.router.navigate(link);
    }
}