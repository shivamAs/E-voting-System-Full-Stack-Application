import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmvoteComponent } from './confirmvote.component';

describe('ConfirmvoteComponent', () => {
  let component: ConfirmvoteComponent;
  let fixture: ComponentFixture<ConfirmvoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmvoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
