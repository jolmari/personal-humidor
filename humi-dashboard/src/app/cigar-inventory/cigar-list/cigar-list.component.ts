import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'humi-cigar-list',
  templateUrl: './cigar-list.component.html',
  styleUrls: ['./cigar-list.component.scss']
})
export class CigarListComponent implements Input {

  @Input() cigars;

  constructor() { }

}
