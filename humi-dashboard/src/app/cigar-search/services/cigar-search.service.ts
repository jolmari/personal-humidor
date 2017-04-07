import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { EnvironmentService } from 'app/core/services/environment.service';
import { Cigar } from 'app/shared/models/cigar';

@Injectable()
export class CigarSearchService {

    constructor(private http: Http) { }

    search(term: string): Observable<Cigar[]> {
        return this.http
            .get(`/api/cigars?name=${term}`)
            .map((r: Response) => r.json());
    }
}