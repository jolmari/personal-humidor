import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";

import { Cigar } from "../models/cigar";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/range';

@Injectable()
export class CigarService {
    private cigarBaseUrl = "http://localhost:56069/api/cigars";
    private headers = new Headers({
        "Content-Type": "application/json"
    });

    constructor(private http: Http) { }

    getCigars(): Observable<Cigar[]> {
        return this.getFromUrl(this.cigarBaseUrl);
    }

    getCigar(id: number): Observable<Cigar> {
        const url:string = `${this.cigarBaseUrl}/${id}`;
        return this.getFromUrl(url);
    }

    delete(cigar: Cigar): Observable<any> {
        const url:string = `${this.cigarBaseUrl}/${cigar.id}`;
        return this.deleteFromUrl(url);
    }

    save(cigar: Cigar): Observable<Cigar> {
        if (cigar.id) {
            const url: string = `${this.cigarBaseUrl}/${cigar.id}`;
            return this.putToUrl(url, cigar);
        }

        return this.postToUrl(this.cigarBaseUrl, cigar);
    }

    private postToUrl(url:string, cigar:Cigar): Observable<Cigar> {
        return this.http
            .post(url, JSON.stringify(cigar), { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    private putToUrl(url:string, cigar: Cigar): Observable<Cigar> {
        return this.http
            .put(url, JSON.stringify(cigar), { headers: this.headers })
            .map(this.extractData)
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
        const errorMsg:string = error.message
            ? error.message
            : error.status ? `${error.status} - ${error.message}` : "Server error";

        console.error(errorMsg);
        return Observable.throw(errorMsg);
    }
}