import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CigarService } from "../services/cigar.service";
import { Cigar } from "../models/cigar";

@Component({
    selector: "cigar-detail",
    templateUrl: "views/cigar-detail-component.html"
})

export class CigarDetailComponent implements OnInit, OnDestroy{
    cigar: Cigar;
    subscription : any;

    constructor(private cigarService: CigarService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.subscription =
            this.route.params.subscribe((params: any) => {
                let id = +params["id"]; // + operator does a type conversion from string to int
                this.cigarService.getCigar(id).then((cigar:Cigar) => this.cigar = cigar);
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    goBack(): void {
        window.history.back();
    }
}