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
            .asObservable() // -> observable
            .debounceTime(300) // delay events 300ms
            .distinctUntilChanged() // ignore if search term did not change
            .switchMap(term => {
                return term // only return latest, discard earlier HTTP requests
                    ? this.cigarSearchService.search(term)
                    : Observable.of<Cigar[]>([]);
            })
            .catch((error:any) => {
                console.error(error);
                return Observable.of<Cigar[]>();
            });
    }
}