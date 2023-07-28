import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreDeNavComponent } from './barre-de-nav.component';

describe('BarreDeNavComponent', () => {
  let component: BarreDeNavComponent;
  let fixture: ComponentFixture<BarreDeNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarreDeNavComponent]
    });
    fixture = TestBed.createComponent(BarreDeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
