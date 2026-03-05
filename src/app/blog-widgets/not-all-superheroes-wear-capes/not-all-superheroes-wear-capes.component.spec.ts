import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAllSuperheroesWearCapesComponent } from './not-all-superheroes-wear-capes.component';

describe('NotAllSuperheroesWearCapesComponent', () => {
  let component: NotAllSuperheroesWearCapesComponent;
  let fixture: ComponentFixture<NotAllSuperheroesWearCapesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotAllSuperheroesWearCapesComponent]
    });
    fixture = TestBed.createComponent(NotAllSuperheroesWearCapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
