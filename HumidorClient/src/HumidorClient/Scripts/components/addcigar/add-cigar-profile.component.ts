import { Component, AfterViewChecked, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

import { AddCigarWizardService } from "../../services/add-cigar-wizard.service";
import { Cigar } from "../../models/cigar";

@Component({
    selector: "add-cigar-profile",
    templateUrl: "../../views/addcigar/add-cigar-profile.component.html",
    styleUrls: ["../../styles/_add-cigar-profile.component.scss"]
})

export class AddCigarProfileComponent implements AfterViewChecked {

    model = new Cigar(1,"Cigar II but this field is just way too long to display!", "Cuba", 21.50, 2011, "Goddamn good cigar!", "Dark", 5);
    colors = ["Very light", "Light", "Neutral", "Dark", "Very dark"];
    countries = [
        "Cuba", "Nicaragua", "Dominican Republic", "Honduras",
        "Ecuador", "Mexico", "Brazil", "USA", "Jamaica",
        "Cameroon"];

    submitted = false;
    active = true;
    
    cigarForm: NgForm;
    @ViewChild("cigarForm") currentForm: NgForm;

    formErrors = {
        "name": "",
        "country": ""
    }

    private validationMessages = {
        "name": {
            "required": "Name is required",
            "minlength": "Name must be at least 4 characters long.",
            "maxlength": "Name cannot be more than 24 characters long.",
            "forbiddenName": "Something named 'Tobacco' cannot be a cigar."
        },
        "country": {
            "required": "Country is required"
        }
    }

    newCigar() {
        this.resetFormState();
    }

    onSubmit() {
        this.submitted = true;
    }

    get diagnostic() { return JSON.stringify(this.model); }

    private resetFormState() {
        this.model = new Cigar(42, "", "", null, null, null, null, null);
        this.active = false;
        setTimeout(() => this.active = true, 0)
    }

    ngAfterViewChecked() {
        this.formChanged();
    }

    private formChanged() {

        if (this.currentForm === this.cigarForm) {
            return;
        }

        this.cigarForm = this.currentForm;

        if (this.cigarForm) {

            // Set method call when form data changes
            this.cigarForm.valueChanges
                .subscribe(data => this.onValueChanged(data));
        }
    }

    private onValueChanged(data?: any) {
        if (!this.cigarForm) {
            return;
        }

        const form = this.cigarForm.form;

        for (const field in this.formErrors) {

            // clear field errors
            this.formErrors[field] = "";
            const control = form.get(field);

            // check control input validity
            if (control && control.dirty && !control.valid) {

                // get field related errors messages
                const messages = this.validationMessages[field];

                for (const key in control.errors) {

                    // add each related error message to the current field
                    this.formErrors[field] += messages[key] + " ";
                }
            }
        }
    }
}