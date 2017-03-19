import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

//import { Ng2BootstrapModule } from "ng2-bootstrap";

//import { CigarInventoryModule } from "./cigar-inventory.module";
//import { AddCigarModule } from "./add-cigar.module";
import { AppComponent } from "./app.component";
//import { routing, appRouteProviders } from "../routes/app.routes";

@NgModule({
    imports: [
        BrowserModule,
        SharedModule,
        CoreModule.forRoot()
        //CigarInventoryModule,
        //AddCigarModule,
        //routing,
        //Ng2BootstrapModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        //appRouteProviders,
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}