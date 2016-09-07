import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CigarInventoryComponent } from "../components/cigar-inventory.component";
import { CigarsComponent } from "../components/cigars.component";
import { AddCigarComponent } from "../components/add-cigar.component";

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
            { path: "new", component: AddCigarComponent },
        ]
    }
];

export const cigarInventoryRouting: ModuleWithProviders = RouterModule.forChild(cigarInventoryRoutes);