import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankadminComponent } from './thankadmin.component';

describe('ThankadminComponent', () => {
  let component: ThankadminComponent;
  let fixture: ComponentFixture<ThankadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
