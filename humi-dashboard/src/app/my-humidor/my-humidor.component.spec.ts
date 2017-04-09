import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHumidorComponent } from './my-humidor.component';

describe('MyHumidorComponent', () => {
  let component: MyHumidorComponent;
  let fixture: ComponentFixture<MyHumidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHumidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
