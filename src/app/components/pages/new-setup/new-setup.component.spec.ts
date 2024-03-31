import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSetupComponent } from './new-setup.component';

describe('NewSetupComponent', () => {
  let component: NewSetupComponent;
  let fixture: ComponentFixture<NewSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewSetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
