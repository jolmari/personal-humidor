import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { CigarSearchService } from "../services/cigar-search.service";
import { CigarService } from "../services/cigar.service";
import { Cigar } from "../models/cigar";

@Component({
    selector: "cigar-search",
    templateUrl: "views/cigar-search.component.html",
    providers: [CigarSearchService]
})

export class CigarSearchComponent implements OnInit {
    cigars: Observable<Cigar[]>;
    searchSubject = new BehaviorSubject<string>(" ");

    constructor(private cigarSearchService: CigarSearchService,
        private cigarService : CigarService,
        private router: Router) {
    }

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
                    : this.cigarService.getCigars();
            })
            .catch((error:any) => {
                console.error(error);
                return Observable.of<Cigar[]>();
            });
    }
}