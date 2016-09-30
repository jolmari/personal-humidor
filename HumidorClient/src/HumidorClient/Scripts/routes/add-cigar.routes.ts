import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddCigarMainComponent } from "../components/addcigarform/add-cigar-main.component";
import { AddCigarFormComponent } from "../components/addcigarform/add-cigar-form.component";

const addCigarRoutes: Routes = [
    {
        path: "add-cigar",
        component: AddCigarMainComponent
    }
];

export const addCigarRouting: ModuleWithProviders = RouterModule.forChild(addCigarRoutes);