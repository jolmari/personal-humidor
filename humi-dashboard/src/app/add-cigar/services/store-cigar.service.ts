import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Cigar } from 'app/shared/models/cigar';
import { EnvironmentService } from '../../core/services/environment.service';

@Injectable()
export class StoreCigarService {
    private cigarBaseUrl = '/api/cigars';
    private headers = new Headers({
        'Content-Type': 'application/json'
    });

    constructor(private http: Http, private environmentService: EnvironmentService) { }

    getAll(): Observable<Cigar[]> {
        return this.getFromUrl(`${this.cigarBaseUrl}`);
    }

    get(id: number): Observable<Cigar> {
        const url: string = `${this.cigarBaseUrl}/${id}`;
        return this.getFromUrl(url);
    }

    delete(cigar: Cigar): Observable<any> {
        const url: string = `${this.cigarBaseUrl}/${cigar.id}`;
        return this.deleteFromUrl(url);
    }

    create(cigar: Cigar): Observable<any> {
        cigar.id = 0;
        const url: string = `${this.cigarBaseUrl}`;
        return this.postToUrl(url, cigar);
    }

    edit(cigar: Cigar): Observable<any> {
        const url: string = `${this.cigarBaseUrl}/${cigar.id}`;
        return this.putToUrl(url, cigar);
    }

    private postToUrl(url:string, cigar:Cigar): Observable<Cigar> {
        return this.http
            .post(url, JSON.stringify(cigar), { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    private putToUrl(url:string, cigar: Cigar): Observable<Response> {
        return this.http
            .put(url, JSON.stringify(cigar), { headers: this.headers })
            .catch(this.handleError);
    }

    private getFromUrl(url: string): Observable<any> {
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private deleteFromUrl(url: string): Observable<any> {
        return this.http
            .delete(url, { headers: this.headers })
            .catch(this.handleError);
    }

    private extractData(res: Response):any {
        return res.json() || { };
    }

    private handleError(error: any): Observable<any> {
        const errorMsg:string = (error.message || error.status) ?
            `${error.status} - ${error.message}` : 'Unknown server error';

        return Observable.throw(errorMsg);
    }
}