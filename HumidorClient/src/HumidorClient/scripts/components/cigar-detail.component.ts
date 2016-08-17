import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CigarService } from "../services/cigar.service";
import { Cigar } from "../models/cigar";

@Component({
    selector: "cigar-detail",
    templateUrl: "views/cigar-detail.component.html"
})

export class CigarDetailComponent implements OnInit, OnDestroy {
    @Input() cigar: Cigar;
    @Output() close = new EventEmitter();
    error: any;
    subscription : any;
    navigated:boolean = false;

    constructor(private cigarService: CigarService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.subscription =
            this.route.params
                .subscribe((params: any) => {
                    if (params.id !== undefined) {
                        this.navigated = true;
                        const id: any = +params.id;
                        this.cigarService.getCigar(id)
                            .subscribe(
                                (cigar: Cigar) => this.cigar = cigar,
                                (error:any) => this.error = error);
                    } else {
                        this.navigated = false;
                        this.cigar = new Cigar();
                    }
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    save():void {
        this.cigarService
            .save(this.cigar)
            .subscribe(
                (cigar: Cigar) => {
                    this.cigar = cigar;
                    this.goBack(cigar);
                },
                (error: any) => this.error = error);
    }

    goBack(savedCigar: Cigar = null): void {
        this.close.emit(savedCigar); // notify listeners that about the changes
        if (this.navigated) {
            window.history.back();
        }
    }
}