export class Cigar {
    constructor(
        public id: number,
        public name: string,
        public country: string,
        public price?: number,
        public year?: number,
        public description?: string,
        public color?: string,
        public rating?: number
    ) { }
}