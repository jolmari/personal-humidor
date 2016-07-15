import { Component } from "@angular/core";
import { CigarService } from "../services/cigar.service";
import { CigarsComponent } from "./cigars.component";

@Component({
    selector: "my-app",
    template: `
        <h1>{{title}}</h1>
        <my-cigars></my-cigars>
    `,
    directives: [CigarsComponent],
    providers: [CigarService]
})

export class AppComponent {
    title = "Boss of this Humidor";
}