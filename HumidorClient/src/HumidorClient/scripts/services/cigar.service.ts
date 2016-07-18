import { Headers, Http } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";

import { Cigar } from "../models/cigar";

@Injectable()
export class CigarService {
    private cigarUrl = "app/cigars";

    constructor(private http: Http) {}

    getCigars(): Promise<Cigar[]> {
        return this.http.get(this.cigarUrl)
            .toPromise()
            .then((response: any) => response.json().data)
            .catch(this.handleError);
    }

    getCigar(id: number): any {
        return Promise.resolve(this.getCigars()
            .then((cigars: Cigar[]) => cigars.find((cigar: Cigar) => cigar.id === id)));
    }

    delete(cigar: Cigar): any {
        const headers:Headers = new Headers({
            "content-type": "application/json"
        });

        const url:string = `${this.cigarUrl}/${cigar.id}`;

        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    }

    save(cigar: Cigar): Promise<Cigar> {
        if (cigar.id) {
            return this.put(cigar);
        }

        return this.post(cigar);
    }

    private post(cigar: Cigar): Promise<Cigar> {
        const headers:Headers = new Headers({
            "content-type": "application/json"
        });

        return this.http
            .post(this.cigarUrl, JSON.stringify(cigar), { headers: headers })
            .toPromise()
            .then((response:any) => response.json().data)
            .catch(this.handleError);
    }

    private put(cigar: Cigar): Promise<Cigar> {
        const headers:Headers = new Headers({
            "content-type": "application/json"
        });

        const url:string = `${this.cigarUrl}/${cigar.id}`;

        return this.http
            .put(url, JSON.stringify(cigar), { headers: headers })
            .toPromise()
            .then(() => cigar)
            .catch(this.handleError);
    }

    private handleError(error: any):Promise<any> {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    }
}