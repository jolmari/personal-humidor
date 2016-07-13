import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    template: `
        <h1>{{title}}</h1>
        <h2>{{cigar.name}} details!</h2>
        <div><label>id: </label>{{cigar.id}}</div>
        <div><label>name: </label>{{cigar.name}}</div>
        <div>
            <label>Name: </label>
            <input [(ngModel)]="cigar.name" placeholder="Name" />
        </div>
    `
})

export class AppComponent {
    title = "Cigar Catalogue";
    cigar: Cigar = {
        id: 1,
        name: "Siglo V"
    };
}

export class Cigar {
    id: number;
    name: string;
}