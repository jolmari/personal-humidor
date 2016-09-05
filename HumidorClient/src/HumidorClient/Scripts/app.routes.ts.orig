import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CigarsComponent } from "./components/cigars.component";
import { DashboardComponent } from "./components/dashboard.component";
import { CigarDetailsComponent } from "./components/cigar-details.component";

const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
    },
    {
        path: "dashboard",
        component: DashboardComponent
    },
    {
        path: "cigars",
        component: CigarsComponent
    },
    {
        path: "details/:id",
        component: CigarDetailsComponent
    }
];

export const appRouteProviders: any = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);