    import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

import "../operators/rxjs-operators";
import { CigarService } from "../services/cigar.service";

@Component({
    selector: "my-app",
    templateUrl: "views/app.component.html",
    directives: [ROUTER_DIRECTIVES],
    providers: [CigarService]
})

export class AppComponent {
    title = "Boss of this Humidor";
}