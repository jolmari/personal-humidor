/// <reference path="../../typings/index.d.ts" />

import { Cigar } from "./cigar";

describe("Cigar", () => {

    it("has name", () => {
        const cigar: Cigar = { id: 1, name: "Cohiba", description: "test" };
        expect(cigar.name).toEqual("Cohiba");
    });

    it("has id", () => {
        const cigar: Cigar = { id: 1, name: "Cohiba", description: "test" };
        expect(cigar.id).toEqual(1);
    });

    it("has description", () => {
        const cigar: Cigar = { id: 1, name: "Cohiba", description: "test" };
        expect(cigar.description).toEqual("test");
    });
});