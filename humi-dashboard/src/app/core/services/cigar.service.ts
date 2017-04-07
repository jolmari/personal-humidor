import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Cigar } from 'app/shared/models/cigar';
import { EnvironmentService } from './environment.service';

@Injectable()
export class CigarService {
    private cigarBaseUrl = '/api/cigars';
    private headers = new Headers({
        'Content-Type': 'application/json'
    });

    constructor(private http: Http, private environmentService: EnvironmentService) { }

    public getAll(): Observable<Cigar[]> {
        return this.getFromUrl(this.cigarBaseUrl);
    }

    public get(id: number): Observable<Cigar> {
        const url = `${this.cigarBaseUrl}/${id}`;
        return this.getFromUrl(url);
    }

    public delete(cigar: Cigar): Observable<any> {
        const url = `${this.cigarBaseUrl}/${cigar.id}`;
        return this.deleteFromUrl(url);
    }

    public create(cigar: Cigar): Observable<any> {
        cigar.id = 0;
        return this.postToUrl(this.cigarBaseUrl, cigar);
    }

    public edit(cigar: Cigar): Observable<any> {
        const url = `${this.cigarBaseUrl}/${cigar.id}`;
        return this.putToUrl(url, cigar);
    }

    private postToUrl(url: string, cigar: Cigar): Observable<Cigar> {
        return this.http
            .post(url, JSON.stringify(cigar), { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    private putToUrl(url: string, cigar: Cigar): Observable<Response> {
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

    private extractData(res: Response): any {
        return res
            .json()
            .map(raw => new Cigar().fromJson(raw));
    }

    private handleError(error: any): Observable<any> {
        const errorMsg: string = (error.message || error.status) ?
            `${error.status} - ${error.message}` : 'Unknown server error';

        return Observable.throw(errorMsg);
    }
}