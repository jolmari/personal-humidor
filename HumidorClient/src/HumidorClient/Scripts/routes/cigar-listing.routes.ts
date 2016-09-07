import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "../components/dashboard.component";
import { AddCigarEntryComponent } from "../components/add-cigar-entry.component";

const cigarListingRoutes: Routes = [
    {path: "dashboard/cigars", component: DashboardComponent},
    {path: "dashboard/cigar", component: AddCigarEntryComponent}
];

export const cigarListingRouting: ModuleWithProviders = RouterModule.forChild(cigarListingRoutes);