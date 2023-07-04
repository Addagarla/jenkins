import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaredestinationsComponent } from './caredestinations.component';

describe('CaredestinationsComponent', () => {
  let component: CaredestinationsComponent;
  let fixture: ComponentFixture<CaredestinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaredestinationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaredestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
