import { Component } from "@angular/core";

import { CigarService } from "../../services/cigar.service";
import { Cigar } from "../../models/cigar";

@Component({
    selector: "add-cigar",
    templateUrl: "../../views/addcigarform/add-cigar-main.component.html"
})

export class AddCigarMainComponent {

    alerts: any = [];
    edit: boolean = true;
    model: Cigar = new Cigar(1, "Cigar II but this field is just way too long to display!", "Cuba", 21.50, 2011, "Goddamn good cigar!", "Dark", 5);

    constructor(private cigarService: CigarService) {        
    }

    onSummarize(cigar: Cigar) {
        this.model = cigar;
        this.edit = false;
    }

    onClosed(state: boolean) {
        if (state) {
            this.edit = false;
            this.submit();
        } else {
            this.edit = true; 
        } 
    }
    
    private submit() {
        this.cigarService.create(this.model)
            .subscribe(
                (result: Cigar) => {
                    this.resetModel();
                    this.edit = true;
                    this.alerts.push({ type: "success", msg: "Form submitted successfully!" });
                },
                (error: any) => {
                    console.log(error);
                    this.alerts.push({ type: "danger", msg: "Oops, something went wrong..." });
                }
            );
    }

    private resetModel() {
        this.model = new Cigar(0, "", "", null, null, null, null, null);
    }
}