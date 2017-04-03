import { Component } from '@angular/core';

import { StoreCigarService } from './services/store-cigar.service';
import { Cigar } from '../models/cigar';

@Component({
    selector: 'humi-add-cigar',
    templateUrl: './add-cigar.component.html'
})

export class AddCigarComponent {

    alerts: any = [];
    edit: boolean;
    model: Cigar;

    constructor(private cigarService: StoreCigarService) {}

    public onSummarize(cigar: Cigar):void {
        this.model = cigar;
        this.edit = false;
    }

    public onClosed(state: boolean): void {
        if (state) {
            this.edit = false;
            this.submit();
        } else {
            this.edit = true;
        }
    }

    private submit(): void {
        this.cigarService.create(this.model)
            .subscribe(
                (result: Cigar) => {
                    this.resetModel();
                    this.edit = true;
                    this.alerts.push({ type: 'success', msg: 'Form submitted successfully!' });
                },
                (error: any) => {
                    console.log(error);
                    this.alerts.push({ type: 'danger', msg: 'Oops, something went wrong...' });
                }
            );
    }

    private resetModel(): void {
        this.model = new Cigar(0, '', '', null, null, null, null, null);
    }
}