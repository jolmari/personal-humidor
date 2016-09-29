﻿import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AlertModule } from "ng2-bootstrap/ng2-bootstrap";
import { SelectModule } from "ng2-select";

import { AddCigarComponent } from "../components/addcigar/add-cigar.component";
import { AddCigarProfileComponent } from "../components/addcigar/add-cigar-profile.component";
import { AddCigarCharacteristicsComponent } from "../components/addcigar/add-cigar-characteristics.component";
import { AddCigarPictureComponent } from "../components/addcigar/add-cigar-picture.component";
import { AddCigarSummaryComponent } from "../components/addcigar/add-cigar-summary.component";
import { addCigarRouting } from "../routes/add-cigar.routes";

import { CigarService } from "../services/cigar.service";
import { FormHelpers } from "../services/helpers/form-helpers";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        addCigarRouting,
        AlertModule,
        SelectModule
    ],
    declarations: [
        AddCigarComponent,
        AddCigarProfileComponent,
        AddCigarCharacteristicsComponent,
        AddCigarPictureComponent,
        AddCigarSummaryComponent
    ],
    providers: [
        CigarService,
        FormHelpers
    ]
})

export class AddCigarEntryModule {}