import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsDetailsComponent } from './comics-details.component';

describe('ComicsDetailsComponent', () => {
  let component: ComicsDetailsComponent;
  let fixture: ComponentFixture<ComicsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComicsDetailsComponent]
    });
    fixture = TestBed.createComponent(ComicsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
