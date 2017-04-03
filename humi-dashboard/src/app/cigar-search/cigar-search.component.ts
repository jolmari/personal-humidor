import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { CigarService } from "app/core/services/cigar.service";
import { Cigar } from "app/models/cigar";

import { CigarSearchService } from "./services/cigar-search.service";

@Component({
    selector: "cigar-search",
    templateUrl: "./cigar-search.component.html"
})

export class CigarSearchComponent implements OnInit {
    @Output() onSelected = new EventEmitter<Cigar>();

    cigars$: Observable<Cigar[]>;
    maxRating: number = 10;

    searchControl = new FormControl();

    constructor(private cigarSearchService: CigarSearchService,
        private cigarService : CigarService,
        private router: Router) {
    }

    ngOnInit(): void {
        this.cigars$ = this.searchControl
            .valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap((term:string) => this.cigarSearchService.search(term));
    }

    selectCigar(cigar: Cigar): void {
        this.onSelected.emit(cigar);
    }

    // private getCigarsFromSearchService(subject:BehaviorSubject<string>): Observable<Cigar[]> {
    //     return subject
    //         .debounceTime(300) // delay events 300ms
    //         .distinctUntilChanged() // ignore if search term did not change
    //         .switchMap((term:string) => this.cigarSearchService.search(term)) // only return latest, discard earlier HTTP requests
    //         .catch((error: any) => {
    //             console.error(error);
    //             return Observable.of<Cigar[]>();
    //         });
    // }
}