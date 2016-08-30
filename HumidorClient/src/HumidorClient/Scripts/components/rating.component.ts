import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "rating",
    template: `
        <div class="rating-stars">
            <template ngFor let-rating [ngForOf]="ratingRange">
                <i class="material-icons">star</i>
            </template>
        </div>
    `
})

export class RatingComponent implements OnInit {
    @Input() max:number;
    private ratingRange: number[];

    calculateMeanRating(meanFunction: (ratings:number[]) => number): number {
        return meanFunction([1, 2, 3, 4]);
    }

    ngOnInit(): void {
        this.ratingRange = ((range: number) => {
            let resultArray: number[] = [];

            for (let i = 1; i <= range; ++i) {
                resultArray.push(i);
            }

            return resultArray;
        })(this.max);
    }
}