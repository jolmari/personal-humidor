import {Cigar} from "../models/cigar";

export class InMemoryDataService {
    createDb():any {
        const cigars:Cigar[] = [
            { id: 1, name: "Siglo II" },
            { id: 2, name: "Siglo III" },
            { id: 3, name: "Siglo IV" },
            { id: 4, name: "Siglo V" },
            { id: 5, name: "Panama Rolls" },
            { id: 6, name: "Bolivar 6" },
            { id: 7, name: "General Machine Rolled" },
            { id: 8, name: "Pancho Villa" },
            { id: 9, name: "Villa Zamorano" },
            { id: 10, name: "Lilliput" }
        ];

        return { cigars };
    }
}