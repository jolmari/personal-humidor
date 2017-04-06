import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { CigarInventoryModule } from './cigar-inventory/cigar-inventory.module';
import { AddCigarModule } from './add-cigar/add-cigar.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        SharedModule,
        CoreModule.forRoot(),
        CigarInventoryModule,
        AddCigarModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}
