import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CigarInventoryComponent } from "../components/cigar-inventory.component";
import { AddCigarMainComponent } from "../components/addcigarform/add-cigar-main.component";

const appRoutes: Routes = [
    {
        path: "inventory", component: CigarInventoryComponent
    },
    {
        path: "create", component: AddCigarMainComponent
    }
];

export const appRouteProviders: any = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);