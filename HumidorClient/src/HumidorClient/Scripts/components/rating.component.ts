import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "rating",
    template: `
        <div class="rating-stars">
            <template ngFor let-starState [ngForOf]="starStates" let-i="index">
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
    private starStates: any;

    ngOnInit(): void {
        var result: any[] = [];
        for (let i = 1; i <= this.max; ++i) {
            result.push(i);
        }

        this.starStates = result;
    }

    private isStarActive(index:number) {
        return this.rate >= index;
    }

    private updateRating(rating: number) {
        this.rate = rating;
    }
}