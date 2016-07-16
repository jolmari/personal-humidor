import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Cigar } from "../models/cigar";
import { CigarService } from "../services/cigar.service";

@Component({
    selector: "my-cigars",
    templateUrl: "views/cigars-component.html"
})

export class CigarsComponent implements OnInit {

    title = "The contents of your Humidor";
    cigars: Cigar[];
    selectedCigar: Cigar;

    constructor(private router: Router, private cigarService: CigarService) { }

    ngOnInit(): any {
        this.getCigars();
    }

    getCigars(): void {
        // assign the value when the given promise is resolved
        this.cigarService.getCigars().then((cigars: Cigar[]) => this.cigars = cigars);
    }

    onSelect(cigar: Cigar):void {
        this.selectedCigar = cigar;
    }

    goToDetail(): void {
        this.router.navigate(["/details", this.selectedCigar.id]);
    }
}

