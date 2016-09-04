import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
    selector: "rating",
    template: `
        <div class="rating-stars">
            <template ngFor [ngForOf]="starStates" let-i="index">
                <i class="material-icons star" 
                   [ngClass]="{active: isStarActive(i) == true}"
                   (click)="updateRating(i)">star</i>
            </template>
        </div>
    `
})

export class RatingComponent implements OnInit {
    @Input() max: number = 5;
    @Input() rate: number = 0;
    @Output() rateChange: EventEmitter<number> = new EventEmitter<number>();

    private starStates: any;

    ngOnInit(): void {
        const result: Array<number> = new Array<number>(this.max);
        this.starStates = result;
    }

    isStarActive(index:number):boolean {
        return this.rate > index;
    }

    updateRating(index: number):void {
        let rating:number = index + 1;
        this.rate = rating;
        this.rateChange.emit(rating);
    }
}