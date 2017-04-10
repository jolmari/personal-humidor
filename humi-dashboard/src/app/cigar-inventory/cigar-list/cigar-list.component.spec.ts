import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CigarListComponent } from './cigar-list.component';

describe('CigarListComponent', () => {
  let component: CigarListComponent;
  let fixture: ComponentFixture<CigarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CigarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CigarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
