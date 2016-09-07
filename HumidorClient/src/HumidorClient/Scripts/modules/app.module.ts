import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { CigarInventoryModule } from "./cigar-inventory.module";
import { AppComponent } from "../components/app.component";
import { routing, appRouteProviders } from "../routes/app.routes";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        CigarInventoryModule,
        routing
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