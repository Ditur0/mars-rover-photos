import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSolComponent } from './input-sol.component';

describe('InputSolComponent', () => {
  let component: InputSolComponent;
  let fixture: ComponentFixture<InputSolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputSolComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
