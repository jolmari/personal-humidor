import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { Cigar } from "../models/cigar";
import { CigarDetailComponent } from "./cigar-detail.component";
import {CigarService} from "../services/cigar.service";

@Component({
    selector: "my-cigars",
    template: `
        <h1>{{title}}</h1>
        <h2>Cigars</h2>
        <ul class="cigars">
            <li *ngFor="let cigar of cigars" (click)="onSelect(cigar)" [class.selected]="cigar === selectedCigar">
                <span class="badge">{{cigar.id}}</span>{{cigar.name}}
            </li>
        </ul>
        <cigar-detail [cigar]="selectedCigar"></cigar-detail>
    `,
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

