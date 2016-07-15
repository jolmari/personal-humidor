import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Cigar } from "../models/cigar";
import { CigarService } from "../services/cigar.service";

@Component({
    selector: "my-dashboard",
    templateUrl: "views/dashboard-component.html"
})

export class DashboardComponent implements OnInit {
    cigars: Cigar[] = [];

    constructor(private router: Router, private cigarService: CigarService) {}

    ngOnInit(): any {
        this.cigarService.getCigars().then((cigars: Cigar[]) => this.cigars = cigars.slice(1,5));
    }

    goToDetail(cigar: Cigar):void {
        let link = ["/details", cigar.id];
        this.router.navigate(link);
    }
}