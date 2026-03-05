import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromGoodToGreatCeoCfoRelationshipComponent } from './from-good-to-great-ceo-cfo-relationship.component';

describe('FromGoodToGreatCeoCfoRelationshipComponent', () => {
  let component: FromGoodToGreatCeoCfoRelationshipComponent;
  let fixture: ComponentFixture<FromGoodToGreatCeoCfoRelationshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FromGoodToGreatCeoCfoRelationshipComponent]
    });
    fixture = TestBed.createComponent(FromGoodToGreatCeoCfoRelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
