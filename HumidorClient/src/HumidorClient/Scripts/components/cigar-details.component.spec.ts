import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { Observable } from "rxjs/Observable";

import { CigarDetailsComponent } from "./cigar-details.component.ts";
import { RatingComponent } from "./rating.component.ts";
import { CigarService } from "../services/cigar.service.ts";

import { Cigar } from "../models/cigar";

let fixture: ComponentFixture<CigarDetailsComponent>;
let component: CigarDetailsComponent;
let de: DebugElement;
let el: HTMLElement;

let cigarServiceStub:any;
let cigarService:any;

class MockCigarService extends CigarService {
    public edit(arg:Cigar): Observable<Cigar> {
        return Observable.create((observer:any) => {
            setTimeout(() => {
                observer.onNext(arg);
                observer.onCompleted();
            }, 1000);
        });
    }
}

describe("CigarDetailsComponent", () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule ],
            declarations: [CigarDetailsComponent, RatingComponent],
            providers: [{ provide: CigarService, useClass: MockCigarService }]
        });

        fixture = TestBed.createComponent(CigarDetailsComponent);
        component = fixture.componentInstance;

        cigarService = TestBed.get(CigarService);
    });

    it("should a defined component",
        () => {
            expect(component).toBeDefined();
        });

    it("should receive and store edited cigar on save",
        () => {
            var expected = new Cigar(1, "Cigar II but this field is just way too long to display!", "Cuba", 21.50, 2011, "Goddamn good cigar!", "Dark", 5);

            component.cigar = expected;
            component.save();

            var actual = component.cigar;
            expect(actual).toBe(expected);
        });
});