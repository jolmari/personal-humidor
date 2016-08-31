/// <reference path="../typings/index.d.ts" />

import { Cigar } from "./cigar";

describe("Cigar", () => {
    const cigar: Cigar = { id: 1, name: "Cohiba", rating: 3, description: "test" };

    it("has name", () => {
        expect(cigar.name).toEqual("Cohiba");
    });

    it("has id", () => {
        expect(cigar.id).toEqual(1);
    });

    it("has description", () => {
        expect(cigar.description).toEqual("test");
    });

    it("has rating", () => {
        expect(cigar.rating).toEqual(3);
    });
});