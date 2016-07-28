import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Cigar } from "../models/cigar";
import { CigarService } from "../services/cigar.service";
import { CigarSearchComponent } from "./cigar-search.component";

@Component({
    selector: "my-dashboard",
    templateUrl: "views/dashboard.component.html",
    directives: [CigarSearchComponent ]
})

export class DashboardComponent implements OnInit {
    cigars: Cigar[] = [];
    error: any;

    constructor(private router: Router, private cigarService: CigarService) {}

    ngOnInit(): any {
        this.getTopFiveCigars();
    }

    goToDetail(cigar: Cigar): void {
        const link:any = ["/details", cigar.id];
        this.router.navigate(link);
    }

    private getTopFiveCigars(): void {
        this.cigarService.getCigars()
            .subscribe(
                (cigars: Cigar[]) => this.cigars = cigars.slice(1, 5),
                (error:any) => this.error = error);
    }
}