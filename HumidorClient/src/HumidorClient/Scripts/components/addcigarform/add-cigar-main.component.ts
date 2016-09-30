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
    model: Cigar;

    constructor(private cigarService: CigarService) {        
    }

    onSummarize(cigar: Cigar) {
        this.model = cigar;
        this.edit = false;
    }

    onCancel() {
        this.edit = true;
    }

    // Submit, launches on event
    onSubmit() {
        this.cigarService.create(this.model)
            .subscribe(
            (result: Cigar) => {
                console.log(JSON.stringify(result));
                this.alerts.push({ type: "success", msg: "Form submitted succesfully!" })
            },
            (error: any) => console.log(error));
    }
}