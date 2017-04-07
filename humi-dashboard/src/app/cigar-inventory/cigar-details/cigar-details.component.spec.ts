import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CigarDetailsComponent } from './cigar-details.component';

describe('CigarDetailsComponent', () => {
  let component: CigarDetailsComponent;
  let fixture: ComponentFixture<CigarDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CigarDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CigarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
