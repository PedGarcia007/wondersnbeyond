import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeyondsComponent } from './beyonds.component';

describe('BeyondsComponent', () => {
  let component: BeyondsComponent;
  let fixture: ComponentFixture<BeyondsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeyondsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeyondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
