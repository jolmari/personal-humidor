import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
    selector: "humi-rating",
    templateUrl: "./rating.component.html",
    styles: [ "./rating.component.scss" ]
})

export class RatingComponent implements OnInit {
    @Input() max: number = 5;
    @Input() rate: number = 0;
    @Output() rateChange: EventEmitter<number> = new EventEmitter<number>();

    private starStates: number[];

    public ngOnInit(): void {
        this.starStates = new Array<number>(this.max);
    }

    private isStarActive(index:number):boolean {
        return this.rate > index;
    }

    private updateRating(index: number):void {
        let rating:number = index + 1;
        this.rate = rating;
        this.rateChange.emit(rating);
    }
}