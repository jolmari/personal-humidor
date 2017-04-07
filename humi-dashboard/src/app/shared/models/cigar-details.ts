import { Serializable } from './serializable';
import { Cigar } from './cigar';
import { Review } from './review';

export class CigarDetails extends Serializable<CigarDetails> {

    constructor(
        public cigar: Cigar = new Cigar(),
        public filler: string = '',
        public binder: string = '',
        public wrapper: string = '',
        public color: string = '',
        public shape: string = '',
        public reviews: Review[] = []
    ) {
        super();
    }
}
