import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Cigar } from "../models/cigar";
import { CigarService } from "../services/cigar.service";
import { CigarDetailComponent } from "./cigar-detail.component";

@Component({
    selector: "my-cigars",
    templateUrl: "views/cigars-component.html",
    directives: [ CigarDetailComponent ]
})

export class CigarsComponent implements OnInit {

    title = "The contents of your Humidor";
    cigars: Cigar[];
    selectedCigar: Cigar;
    addingCigar: boolean = false;
    error: any;

    constructor(private router: Router, private cigarService: CigarService) { }

    ngOnInit(): any {
        this.getCigars();
    }

    getCigars(): void {
        // assign the value when the given promise is resolved
        this.cigarService.getCigars().then((cigars: Cigar[]) => this.cigars = cigars);
    }

    addCigar():void {
        this.addingCigar = true;
        this.selectedCigar = null;
    }

    deleteCigar(deletedCigar: Cigar, event: any): void {
        event.stopPropagation();
        this.cigarService
            .delete(deletedCigar)
            .then((response: any) => {
                this.cigars = this.cigars.filter((c: Cigar) => c !== deletedCigar);
            })
            .catch((error: any) => this.error = error);
    }

    close(savedCigar: Cigar):void {
        this.addingCigar = false;
        if (savedCigar) {
            this.getCigars();
        }
    }

    onSelect(cigar: Cigar): void {
        this.addingCigar = false;
        this.selectedCigar = cigar;
    }

    goToDetail(): void {
        this.router.navigate(["/details", this.selectedCigar.id]);
    }
}