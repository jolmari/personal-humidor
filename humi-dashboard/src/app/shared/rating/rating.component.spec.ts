import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { RatingComponent } from "./rating.component";

let fixture: ComponentFixture<RatingComponent>;
let comp: RatingComponent;
let de: DebugElement;
let el: HTMLElement;

describe("RatingComponent", () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RatingComponent] // Declare tested component.
        });

        fixture = TestBed.createComponent(RatingComponent); // Create test fixture.
        comp = fixture.componentInstance; // Component test instance.


    });

});