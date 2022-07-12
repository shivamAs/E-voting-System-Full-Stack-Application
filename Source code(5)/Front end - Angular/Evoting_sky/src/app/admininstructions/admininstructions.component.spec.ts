import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmininstructionsComponent } from './admininstructions.component';

describe('AdmininstructionsComponent', () => {
  let component: AdmininstructionsComponent;
  let fixture: ComponentFixture<AdmininstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmininstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmininstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
