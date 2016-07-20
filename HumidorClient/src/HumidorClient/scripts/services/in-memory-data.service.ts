import {Cigar} from "../models/cigar";

export class InMemoryDataService {
    createDb(): any {
        const cigars: Cigar[] = [
            {
                id: 1,
                name: "Siglo II",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut congue libero. Aenean id dapibus lorem. Donec rutrum auctor orci."
            },
            {
                id: 2,
                name: "Siglo III",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut congue libero. Aenean id dapibus lorem. Donec rutrum auctor orci."
            },
            {
                id: 3,
                name: "Siglo IV",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut congue libero. Aenean id dapibus lorem. Donec rutrum auctor orci."
            },
            {
                id: 4,
                name: "Siglo V",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut congue libero. Aenean id dapibus lorem. Donec rutrum auctor orci."
            },
            {
                id: 5,
                name: "Panama Rolls",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut congue libero. Aenean id dapibus lorem. Donec rutrum auctor orci."
            },
            {
                id: 6,
                name: "Bolivar 6",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut congue libero. Aenean id dapibus lorem. Donec rutrum auctor orci."
            },
            {
                id: 7,
                name: "General Machine Rolled",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut congue libero. Aenean id dapibus lorem. Donec rutrum auctor orci."
            },
            {
                id: 8,
                name: "Pancho Villa",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut congue libero. Aenean id dapibus lorem. Donec rutrum auctor orci."
            },
            {
                id: 9,
                name: "Villa Zamorano",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut congue libero. Aenean id dapibus lorem. Donec rutrum auctor orci."
            },
            {
                id: 10,
                name: "Lilliput",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut congue libero. Aenean id dapibus lorem. Donec rutrum auctor orci."
            }
        ];

        return { cigars };
    }
}