﻿import { Component, EventEmitter, Output, AfterViewChecked, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Location } from "@angular/common";

import { FormHelpers } from "../../services/helpers/form-helpers";
import { Cigar } from "../../models/cigar";

@Component({
    selector: "add-cigar-form",
    templateUrl: "../../views/addcigarform/add-cigar-form.component.html",
    styleUrls: ["../../styles/_add-cigar-profile.component.scss"]
})

export class AddCigarFormComponent implements AfterViewChecked {

    model = new Cigar(1,"Cigar II but this field is just way too long to display!", "Cuba", 21.50, 2011, "Goddamn good cigar!", "Dark", 5);
    colors = ["Very light", "Light", "Neutral", "Dark", "Very dark"];
    countries = [
        "Cuba", "Nicaragua", "Dominican Republic", "Honduras",
        "Ecuador", "Mexico", "Brazil", "USA", "Jamaica",
        "Cameroon"];
    statuses = ["Bought", "Not bought", "Considering purchase"]

    @Output() onSummarize = new EventEmitter<Cigar>();
    
    cigarForm: NgForm;
    @ViewChild("cigarFormRef") currentForm: NgForm;

    formErrors = {
        "name": "",
        "country": ""
    }

    private validationMessages = {
        "name": {
            "required": { "message": "Name is required" },
            "minlength": {
                "message": "Name must be at least {value} characters long.", 
                "field": "requiredLength"
            },
            "maxlength": {
                "message": "Name cannot be more than {value} characters long.",
                "field": "requiredLength"
            },
            "forbiddenName": { "message": "Something named 'Tobacco' cannot be a cigar." }
        },
        "country": {
            "required": { "message": "Country is required" }
        }
    }

    constructor(private formHelpers: FormHelpers, private location: Location) {}

    summarize() {
        this.onSummarize.emit(this.model);
    }

    back() {
        this.location.back();
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
                .subscribe(data =>
                    this.formHelpers.onValueChanged(
                        this.cigarForm, this.formErrors, this.validationMessages));
        }
    }
}