import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "../components/dashboard.component";

const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "/cigar-listing",
        pathMatch: "full"
    },
    {
        path: "cigar-listing",
        component: DashboardComponent
    }
];

export const appRouteProviders: any = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);