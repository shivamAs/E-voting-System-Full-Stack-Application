import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveresultComponent } from './liveresult.component';

describe('LiveresultComponent', () => {
  let component: LiveresultComponent;
  let fixture: ComponentFixture<LiveresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
