import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class Config {

    private configuration: any;
    private environment: any;

    constructor(private http: Http) {
    }

    load():void {
        
    }

    getEnvironment(key: any): any {
        
    }

    getConfiguration(key: any): any {
        
    }
}