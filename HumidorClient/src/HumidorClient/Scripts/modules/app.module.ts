import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { Ng2BootstrapModule } from "ng2-bootstrap";

import { CigarInventoryModule } from "./cigar-inventory.module";
import { AddCigarModule } from "./add-cigar.module";
import { AppComponent } from "../components/app.component";
import { routing, appRouteProviders } from "../routes/app.routes";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        CigarInventoryModule,
        AddCigarModule,
        routing,
        Ng2BootstrapModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        appRouteProviders,
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}