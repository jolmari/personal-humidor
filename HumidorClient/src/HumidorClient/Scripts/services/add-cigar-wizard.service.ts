import { Injectable } from "@angular/core";

import { Cigar } from "../models/cigar";

@Injectable()
export class AddCigarWizardService {
    private savedCigar: Cigar;

    constructor() {
        var cigar = new Cigar(1, "Cigar II", "Cuba", 21.50, 2011, "Goddamn good cigar!", "Dark", 5);
        this.updateCigarEntry(cigar);
    }

    updateCigarEntry(cigar: Cigar) {
        this.savedCigar = cigar;
    }

    getCigarEntry(): Cigar {
        return this.savedCigar;
    }
}