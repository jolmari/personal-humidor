import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

import { CigarSearchService } from "../services/cigar-search.service";
import { Cigar } from "../models/cigar";

@Component({
    selector: "cigar-search",
    templateUrl: "views/cigar-search.component.html",
    providers: [CigarSearchService]
})

export class CigarSearchComponent implements OnInit {
    cigars: Observable<Cigar[]>;
    searchSubject = new Subject<string>();

    constructor(private cigarSearchService: CigarSearchService,
        private router: Router) { }

    search(term: string) {
        this.searchSubject.next(term);
    }

    ngOnInit(): void {
        this.cigars = this.searchSubject
            .asObservable() // -> Observable
            .debounceTime(300) // Delay events 300ms
            .distinctUntilChanged() // Ignore if search term did not change
            .switchMap(term => {
                return term // Only return latest, discard earlier HTTP requests
                    ? this.cigarSearchService.search(term)
                    : Observable.of<Cigar[]>([]);
            })
            .catch(error => {
                console.error(error);
                return Observable.of<Cigar[]>();
            });
    }
}