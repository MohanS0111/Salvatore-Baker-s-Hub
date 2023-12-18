import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinformationsComponent } from './userinformations.component';

describe('UserinformationsComponent', () => {
  let component: UserinformationsComponent;
  let fixture: ComponentFixture<UserinformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserinformationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserinformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
