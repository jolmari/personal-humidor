import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AddCigarComponent } from "../components/addcigar/add-cigar.component";
import { AddCigarProfileComponent } from "../components/addcigar/add-cigar-profile.component";
import { AddCigarCharacteristicsComponent } from "../components/addcigar/add-cigar-characteristics.component";
import { AddCigarPictureComponent } from "../components/addcigar/add-cigar-picture.component";
import { AddCigarSummaryComponent } from "../components/addcigar/add-cigar-summary.component";
import { addCigarRouting } from "../routes/add-cigar.routes";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        addCigarRouting
    ],
    declarations: [
        AddCigarComponent,
        AddCigarProfileComponent,
        AddCigarCharacteristicsComponent,
        AddCigarPictureComponent,
        AddCigarSummaryComponent
    ]
})

export class AddCigarEntryModule {}