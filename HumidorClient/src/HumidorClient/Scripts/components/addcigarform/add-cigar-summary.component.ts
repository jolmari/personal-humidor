import { Component, Input } from "@angular/core";

import { Cigar } from "../../models/cigar";

@Component({
    selector: "add-cigar-summary",
    templateUrl: "../../views/addcigarform/add-cigar-summary.component.html"
})

export class AddCigarSummaryComponent {

    @Input() cigar: Cigar;
}