import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproductsonebyoneComponent } from './editproductsonebyone.component';

describe('EditproductsonebyoneComponent', () => {
  let component: EditproductsonebyoneComponent;
  let fixture: ComponentFixture<EditproductsonebyoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditproductsonebyoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditproductsonebyoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
