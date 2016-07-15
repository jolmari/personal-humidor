import { Component, Input } from "@angular/core";
import { Cigar } from "../models/cigar";

@Component({
    selector: "cigar-detail",
    template: `
    <div *ngIf="cigar">
        <h2>{{cigar.name}} details!</h2>
        <div><label>id:</label>{{cigar.id}}</div>
        <div><label>name:</label>{{cigar.name}}</div>
        <div>
            <label>Name: </label>
            <input [(ngModel)]="cigar.name" placeholder="Name" />
        </div>
    </div>
    `
})

export class CigarDetailComponent {
    @Input()
    cigar: Cigar;
}