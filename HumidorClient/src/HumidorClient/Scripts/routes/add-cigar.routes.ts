import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddCigarComponent } from "../components/addcigar/add-cigar.component";
import { AddCigarProfileComponent } from "../components/addcigar/add-cigar-profile.component";
import { AddCigarCharacteristicsComponent } from "../components/addcigar/add-cigar-characteristics.component";

const addCigarRoutes: Routes = [
    {
        path: "add-cigar",
        component: AddCigarComponent,
        children: [
            { path: "", component: AddCigarProfileComponent },
            { path: "profile", component: AddCigarProfileComponent },
            { path: "characteristics", component: AddCigarCharacteristicsComponent },
        ]
    }
];

export const addCigarRouting: ModuleWithProviders = RouterModule.forChild(addCigarRoutes);