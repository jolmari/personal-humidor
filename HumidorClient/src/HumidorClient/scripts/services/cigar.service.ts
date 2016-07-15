import { Injectable } from "@angular/core";
import { mockCigars } from "../models/mock-cigars";
import {Cigar} from "../models/cigar";

@Injectable()

export class CigarService {
    getCigars(): Promise<Cigar[]> {
        return Promise.resolve(mockCigars);
    }
}