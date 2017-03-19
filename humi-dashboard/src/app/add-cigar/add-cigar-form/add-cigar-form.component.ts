import { Component, EventEmitter, Input, Output, AfterViewChecked, ViewChild } from "@angular/core";
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

    colors = ["Very light", "Light", "Neutral", "Dark", "Very dark"];
    countries = [
        "Cuba", "Nicaragua", "Dominican Republic", "Honduras",
        "Ecuador", "Mexico", "Brazil", "USA", "Jamaica",
        "Cameroon"];
    statuses = ["Bought", "Not bought", "Considering purchase"]

    alerts:any = [];

    @Input() cigar: Cigar; 
    @Output() onSummarize = new EventEmitter<Cigar>();
    
    cigarForm: NgForm;
    @ViewChild("cigarFormRef") currentForm: NgForm;

    formErrors = {
        "name": "",
        "country": "",
        "price": "",
        "year": ""
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
        },
        "price": {
            "required": { "message": "Price is required" }
        },
        "year": {
            "required": { "message": "Manufacturing year is required" },
            "pattern": { "message": "Please input year in yyyy format" }  
        }
    }

    constructor(private formHelpers: FormHelpers, private location: Location) {}

    summarize() {
        if (this.currentForm.valid) {
            this.onSummarize.emit(this.cigar);
        } else {
            this.alerts.push({type:"danger", msg: "Form is not valid.", dismissible:true});
        }
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