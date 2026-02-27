import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcclaimedKeynoteComponent } from './acclaimed-keynote.component';

describe('AcclaimedKeynoteComponent', () => {
  let component: AcclaimedKeynoteComponent;
  let fixture: ComponentFixture<AcclaimedKeynoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcclaimedKeynoteComponent]
    });
    fixture = TestBed.createComponent(AcclaimedKeynoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
