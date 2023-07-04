import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcplannerComponent } from './dcplanner.component';

describe('DcplannerComponent', () => {
  let component: DcplannerComponent;
  let fixture: ComponentFixture<DcplannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcplannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DcplannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
