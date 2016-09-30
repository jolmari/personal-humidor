import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CigarInventoryComponent } from "../components/cigar-inventory.component";
import { CigarsComponent } from "../components/cigars.component";
import { AddCigarMainComponent } from "../components/addcigarform/add-cigar-main.component";

const cigarInventoryRoutes: Routes = [
    {
        path: "",
        redirectTo: "/cigar-inventory",
        pathMatch: "full"
    },
    {
        path: "cigar-inventory",
        component: CigarInventoryComponent,
        children: [
            { path: "", component: CigarsComponent },
        ]
    }
];

export const cigarInventoryRouting: ModuleWithProviders = RouterModule.forChild(cigarInventoryRoutes);