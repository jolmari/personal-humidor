import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Cigar } from 'app/shared/models/cigar';
import { CigarService } from '../../core/services/cigar.service';

@Component({
  selector: 'humi-cigar-details',
  templateUrl: './cigar-details.component.html',
  styleUrls: ['./cigar-details.component.scss']
})
export class CigarDetailsComponent implements OnInit {

  private cigar: Cigar;

  constructor(private cigarService: CigarService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.cigarService.get(+params['id']))
      .subscribe((cigar: Cigar) => {
        console.log("fewfwefw");
        this.cigar = cigar;
      });
  }
}
