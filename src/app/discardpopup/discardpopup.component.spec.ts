import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscardpopupComponent } from './discardpopup.component';

describe('DiscardpopupComponent', () => {
  let component: DiscardpopupComponent;
  let fixture: ComponentFixture<DiscardpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscardpopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscardpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
