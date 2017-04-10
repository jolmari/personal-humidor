import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'humi-cigar-list',
  templateUrl: './cigar-list.component.html',
  styleUrls: ['./cigar-list.component.scss']
})
export class CigarListComponent implements Input {

  @Input() cigars;

  constructor(private router: Router) { }

  public setClickedRow(index: string, id: string): void {
    this.router.navigate(['/inventory', id]);
  }
}
