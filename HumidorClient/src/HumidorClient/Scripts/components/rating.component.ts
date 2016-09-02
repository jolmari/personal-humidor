import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "rating",
    template: `
        <div class="rating-stars">
            <template ngFor let-starState [ngForOf]="starStates">
                <i class="material-icons star" [ngClass]="{active: starState.active == true}">star</i>
            </template>
        </div>
    `
})

export class RatingComponent implements OnInit {
    @Input() max: number = 5;
    @Input() rate: number = 0;
    private starStates: any;

    ngOnInit(): void {
        this.starStates = this.updateRatings(this.max, this.rate);
    }

    private updateRatings(max:number, rate:number):any {
        const resultArray: any = [];

        for (let i = 1; i <= max; ++i) {
            resultArray.push({
                active: this.isStarActive(i, this.rate)
            });
        }

        return resultArray;
    }

    private isStarActive(index:number, rate:number) {
        return rate >= index;
    }
}