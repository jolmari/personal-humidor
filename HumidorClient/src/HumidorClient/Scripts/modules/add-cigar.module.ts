import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { AlertModule } from "ng2-bootstrap/ng2-bootstrap";

import { AddCigarMainComponent } from "../components/addcigarform/add-cigar-main.component";
import { AddCigarFormComponent } from "../components/addcigarform/add-cigar-form.component";
import { addCigarRouting } from "../routes/add-cigar.routes";
import { AddCigarSummaryComponent } from "../components/addcigarform/add-cigar-summary.component";

import { CigarService } from "../services/cigar.service";
import { FormHelpers } from "../services/helpers/form-helpers";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        addCigarRouting,
        AlertModule,
        CommonModule
    ],
    declarations: [
        AddCigarMainComponent,
        AddCigarFormComponent,
        AddCigarSummaryComponent,
    ],
    providers: [
        CigarService,
        FormHelpers
    ]
})

export class AddCigarModule {}