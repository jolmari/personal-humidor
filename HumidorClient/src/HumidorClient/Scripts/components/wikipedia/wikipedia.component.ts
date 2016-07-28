import { Component } from "@angular/core";
import { JSONP_PROVIDERS } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { WikipediaService } from "../../services/wikipedia/wikipedia.service";

@Component({
    selector: "wiki-search",
    template: `
        <div>
            <h1>Wikipedia search</h1>
            <p><i>Fetches results after each new keystroke</i></p>
            <input #term (keyup)="search(term.value)" />
            <ul>
                <li *ngFor="let item of items | async">{{item}}</li>
            </ul>
        </div>
    `,
    providers: [JSONP_PROVIDERS, WikipediaService]
})

export class WikipediaComponent {
    items: Observable<string[]>;

    constructor(private wikipediaService: WikipediaService) { }

    search(term: string):void {
        this.items = this.wikipediaService.search(term);
    }
}