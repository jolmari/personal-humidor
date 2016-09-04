import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { EnvironmentService } from "../services/environment.service";

import { Cigar } from "../models/cigar";

@Injectable()
export class CigarSearchService {
    private cigarBaseUrl = "api/cigars";

    constructor(private http: Http, private environmentService: EnvironmentService) { }

    search(term: string): Observable<Cigar[]> {
        return this.http
            .get(`${this.environmentService.getApiBase()}${this.cigarBaseUrl}?name=${term}&amount=10`)
            .map((r: Response) => r.json() as Cigar[]);
    }
}