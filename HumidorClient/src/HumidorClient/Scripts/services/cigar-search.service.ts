import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { Cigar } from "../models/cigar";

@Injectable()
export class CigarSearchService {
    private cigarBaseUrl = "http://localhost:56069/api/cigars";

    constructor(private http: Http) { }

    search(term: string): Observable<Cigar[]> {
        return this.http
            .get(`${this.cigarBaseUrl}?name=${term}`)
            .map((r: Response) => r.json() as Cigar[])
            .share(); // Convert into hot observable to prevent double request
    }
}