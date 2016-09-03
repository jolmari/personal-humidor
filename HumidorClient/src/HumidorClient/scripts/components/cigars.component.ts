import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Cigar } from "../models/cigar";
import { CigarService } from "../services/cigar.service";

@Component({
    selector: "my-cigars",
    templateUrl: "views/cigars.component.html"
})

export class CigarsComponent implements OnInit {
    cigars: Cigar[];
    addingCigar: boolean = false;
    error: any;

    constructor(private router: Router, private cigarService: CigarService) { }

    ngOnInit(): any {
        this.getCigars();
    }

    getCigars(): void {
        this.cigarService.getCigars()
            .subscribe(
                (cigars: Cigar[]) => this.cigars = cigars,
                (error:any) => this.error = error);
    }

    addCigar():void {
        this.addingCigar = true;
    }

    deleteCigar(deletedCigar: Cigar, event: any): void {
        event.stopPropagation();
        this.cigarService
            .delete(deletedCigar)
            .subscribe(
                () => this.cigars = this.cigars.filter((c: Cigar) => c !== deletedCigar),
                (error:any) => this.error = error);
    }

    close(savedCigar: Cigar):void {
        this.addingCigar = false;
        if (savedCigar) {
            this.getCigars();
        }
    }

    goToDetail(cigar: Cigar): void {
        const link: any = ["/details", cigar.id];
        this.router.navigate(link);
    }
}