import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { Cigar } from "../models/cigar";
import { CigarDetailComponent } from "./cigar-detail.component";
import {CigarService} from "../services/cigar.service";

@Component({
    selector: "my-cigars",
    templateUrl: "views/cigars-component.html",
    directives: [CigarDetailComponent]
})

export class CigarsComponent implements OnInit {
    constructor(private cigarService: CigarService) {}

    ngOnInit(): any {
        this.getCigars();
    }

    title = "The contents of your Humidor";

    cigars: Cigar[];
    selectedCigar: Cigar;

    getCigars():void {
        // assign the value when the given promise is resolved
        this.cigarService.getCigars().then((cigars: Cigar[]) => this.cigars = cigars);
    }

    onSelect(cigar: Cigar):void {
        this.selectedCigar = cigar;
    }
}

