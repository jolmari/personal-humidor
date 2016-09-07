import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "../components/dashboard.component";
import { CigarSearchComponent } from "../components/cigar-search.component";
import { AddCigarEntryComponent } from "../components/add-cigar-entry.component";

const cigarListingRoutes: Routes = [{
    path: "cigar-listing",
    component: DashboardComponent,
    children: [
        { path: "/cigars", component: CigarSearchComponent },
        { path: "/cigar", component: AddCigarEntryComponent }
    ]
}];

export const cigarListingRouting: ModuleWithProviders = RouterModule.forChild(cigarListingRoutes);