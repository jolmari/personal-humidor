import { Component } from "@angular/core";
import { Cigar } from "../models/cigar";

@Component({
    selector: "cigars",
    templateUrl: "../views/cigars.component.html"
})

export class CigarsComponent {
    selectedCigar: Cigar;

    onSelected(cigar: Cigar): void {
        this.selectedCigar = cigar;
    }

    detailsClosed(cigar: Cigar): void {
        this.selectedCigar = null;
    }
}