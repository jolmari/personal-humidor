import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "../components/app.component";
import { CigarsComponent } from "../components/cigars.component";
import { CigarSearchComponent } from "../components/cigar-search.component";
import { DashboardComponent } from "../components/dashboard.component";
import { CigarDetailsComponent } from "../components/cigar-details.component";
import { RatingComponent } from "../components/rating.component";
import { routing, appRouteProviders } from "../app.routes";

import { CigarService } from "../services/cigar.service";
import { CigarSearchService } from "../services/cigar-search.service";
import { EnvironmentService } from "../services/environment.service";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        CigarsComponent,
        CigarSearchComponent,
        DashboardComponent,
        CigarDetailsComponent,
        RatingComponent
    ],
    providers: [
        CigarService,
        CigarSearchService,
        appRouteProviders,
        EnvironmentService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}