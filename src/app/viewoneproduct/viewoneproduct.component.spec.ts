import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewoneproductComponent } from './viewoneproduct.component';

describe('ViewoneproductComponent', () => {
  let component: ViewoneproductComponent;
  let fixture: ComponentFixture<ViewoneproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewoneproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewoneproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
