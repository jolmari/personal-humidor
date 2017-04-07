import { Serializable } from './serializable';

export class Review extends Serializable<Review> {

    constructor(
        public id: number = 0,
        public cigarId: number = 0,
        public content: string = '',
        public price?: number
    ) {
        super();
    }
}
