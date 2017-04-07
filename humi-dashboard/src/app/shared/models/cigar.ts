import { Serializable } from './serializable';

export class Cigar extends Serializable<Cigar> {

    constructor(
        public id: number = 0,
        public name: string = '',
        public brand: string = '',
        public country: string = '',
        public priceAvg: number = 0,
        public ratingAvg?: number,
        public year?: number,
        public description?: string,
        public color?: string
    ) {
        super();
    }
}
