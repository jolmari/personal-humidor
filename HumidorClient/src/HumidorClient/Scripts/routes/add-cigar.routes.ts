import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddCigarComponent } from "../components/addcigar/add-cigar.component";
import { AddCigarProfileComponent } from "../components/addcigar/add-cigar-profile.component";
import { AddCigarCharacteristicsComponent } from "../components/addcigar/add-cigar-characteristics.component";
import { AddCigarPictureComponent } from "../components/addcigar/add-cigar-picture.component";
import { AddCigarSummaryComponent } from "../components/addcigar/add-cigar-summary.component";

const addCigarRoutes: Routes = [
    {
        path: "add-cigar",
        component: AddCigarComponent,
        children: [
            { path: "", component: AddCigarProfileComponent },
            { path: "profile", component: AddCigarProfileComponent },
            { path: "characteristics", component: AddCigarCharacteristicsComponent },
            { path: "picture", component: AddCigarPictureComponent },
            { path: "summary", component: AddCigarSummaryComponent },
        ]
    }
];

export const addCigarRouting: ModuleWithProviders = RouterModule.forChild(addCigarRoutes);