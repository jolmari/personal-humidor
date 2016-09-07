import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AddCigarComponent } from "../components/add-cigar.component";
import { addCigarRouting } from "../routes/add-cigar.routes";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        addCigarRouting
    ],
    declarations: [
        AddCigarComponent
    ]
})

export class AddCigarEntryModule {}