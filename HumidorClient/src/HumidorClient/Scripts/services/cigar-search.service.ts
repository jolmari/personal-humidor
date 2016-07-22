import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { Cigar } from "../models/cigar";

@Injectable()
export class CigarSearchService {
    constructor(private http: Http) { }

    search(term: string): Observable<Cigar[]> {
        return this.http
            .get(`app/cigars/?name=${term}+`)
            .map((r: Response) => r.json().data as Cigar[]);
    }
}