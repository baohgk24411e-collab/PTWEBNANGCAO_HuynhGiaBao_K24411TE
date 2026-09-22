import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from './component';

describe('Component', () => {
  let component: Component;
  let fixture: ComponentFixture<Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
