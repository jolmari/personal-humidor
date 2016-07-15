import { provideRouter, RouterConfig } from "@angular/router";
import { CigarsComponent } from "./components/cigars.component";
import { DashboardComponent } from "./components/dashboard.component";
import { CigarDetailComponent } from "./components/cigar-detail.component";

const routes: RouterConfig = [
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
        component: CigarDetailComponent
    }
];

export const appRouterProviders: RouterConfig[][] = [
    provideRouter(routes)
];