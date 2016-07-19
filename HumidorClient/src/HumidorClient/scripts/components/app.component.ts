import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

import { CigarService } from "../services/cigar.service";

@Component({
    selector: "my-app",
    template: `
        <div>
            <a [routerLink]="['/dashboard']">Dashboard</a>
            <a [routerLink]="['/cigars']">Cigars</a>
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [CigarService]
})

export class AppComponent {
    title = "Boss of this Humidor";
}