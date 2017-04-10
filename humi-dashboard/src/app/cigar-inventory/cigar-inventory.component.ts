import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CigarService } from 'app/core/services/cigar.service';
import { Cigar } from 'app/shared/models/cigar';

@Component({
    selector: 'humi-cigar-inventory',
    styleUrls: ['./cigar-inventory.component.scss'],
    templateUrl: './cigar-inventory.component.html'
})

export class CigarInventoryComponent implements OnInit {

    public cigars: Cigar[];

    constructor(private cigarService: CigarService) {}

    public ngOnInit(): void {
        this.cigarService
            .getAll()
            .subscribe(result => this.cigars = result);
    }
}
