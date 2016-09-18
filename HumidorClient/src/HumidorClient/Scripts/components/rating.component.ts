import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
    selector: "rating",
    templateUrl: "views/rating.component.html"
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