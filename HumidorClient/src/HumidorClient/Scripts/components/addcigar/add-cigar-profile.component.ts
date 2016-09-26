import { Component, OnInit } from "@angular/core";

import { AddCigarWizardService } from "../../services/add-cigar-wizard.service";
import { Cigar } from "../../models/cigar";

@Component({
    selector: "add-cigar-profile",
    templateUrl: "../../views/addcigar/add-cigar-profile.component.html",
    styleUrls: ["../../styles/_add-cigar-profile.component.scss"]
})

export class AddCigarProfileComponent {

    model = new Cigar(1,"Cigar II", "Cuba", 21.50, 2011, "Goddamn good cigar!", "Dark", 5);
    colors = ["Very light", "Light", "Neutral", "Dark", "Very dark"];
    countries = [
        "Cuba", "Nicaragua", "Dominican Republic", "Honduras",
        "Ecuador", "Mexico", "Brazil", "USA", "Jamaica",
        "Cameroon"];

    submitted = false;
    active = true;

    onSubmit() {
        this.submitted = true;
    }

    newCigar() {
        this.resetFormState();
    }

    private resetFormState() {
        this.model = new Cigar(42, "", "", null, null, null, null, null);
        this.active = false;
        setTimeout(() => this.active = true, 0)
    }

    get diagnostic() { return JSON.stringify(this.model); }
}