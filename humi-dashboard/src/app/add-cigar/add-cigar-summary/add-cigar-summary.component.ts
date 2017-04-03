import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Cigar } from '../../models/cigar';

@Component({
    selector: 'humi-add-cigar-summary',
    templateUrl: './add-cigar-summary.component.html'
})

export class AddCigarSummaryComponent {

    @Input() cigar: Cigar;
    @Output() onClosed = new EventEmitter<boolean>();
    
    back() {
        this.onClosed.emit(false);
    }

    confirm() {
        this.onClosed.emit(true);
    }
}