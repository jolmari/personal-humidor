import { Injectable } from "@angular/core";
import { Jsonp, URLSearchParams, Response } from "@angular/http";

@Injectable()
export class WikipediaService {
    constructor(private jsonp: Jsonp) { }

    search(term: string) {
        const wikiUrl:string = "http://en.wikipedia.org/w/api.php";

        const params: URLSearchParams = new URLSearchParams();
        params.set("search", term);
        params.set("action", "opensearch");
        params.set("format", "json");
        params.set("callback", "JSONP_CALLBACK");

        return this.jsonp
            .get(wikiUrl, { search: params })
            .map((response:Response) => (response.json()[1] as string[]));
    }
}