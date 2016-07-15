import { Injectable } from "@angular/core";
import { mockCigars } from "../models/mock-cigars";
import { Cigar } from "../models/cigar";

@Injectable()

export class CigarService {

    getCigars(): any {
        return Promise.resolve(mockCigars);
    }

    getCigar(id: number): any {
        return Promise.resolve(this.getCigars().then((cigars: Cigar[]) => cigars.find((cigar: Cigar) => cigar.id === id)));
    }
}