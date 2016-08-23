import { Component, EventEmitter, Input, Output } from "@angular/core";

import { CigarService } from "../services/cigar.service";
import { Cigar } from "../models/cigar";

@Component({
    selector: "cigar-details",
    templateUrl: "views/cigar-details.component.html"
})

export class CigarDetailsComponent {

    error: any;
    
    constructor(private cigarService: CigarService) {}

    @Input() cigar: Cigar;
    @Output() close = new EventEmitter();
    
    save():void {
        this.cigarService
            .save(this.cigar)
            .subscribe(
                (cigar: Cigar) => {
                    this.cigar = cigar;
                    this.closePanel(cigar);
                },
                (error: any) => this.error = error);
    }

    closePanel(savedCigar: Cigar = null): void {
        this.close.emit(savedCigar); // notify listeners that about the changes
    }
}