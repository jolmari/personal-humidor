import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { AddCigarComponent } from './add-cigar.component';
import { AddCigarFormComponent } from './add-cigar-form/add-cigar-form.component';
import { AddCigarSummaryComponent } from './add-cigar-summary/add-cigar-summary.component';
import { AddCigarRouting } from './add-cigar-routing.module';

import { StoreCigarService } from './services/store-cigar.service';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        HttpModule,
        AddCigarRouting
    ],
    declarations: [
        AddCigarComponent,
        AddCigarFormComponent,
        AddCigarSummaryComponent,
    ],
    providers: [
        StoreCigarService
    ]
})

export class AddCigarModule {}