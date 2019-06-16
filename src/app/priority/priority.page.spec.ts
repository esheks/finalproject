import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityPage } from './priority.page';

describe('PriorityPage', () => {
  let component: PriorityPage;
  let fixture: ComponentFixture<PriorityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
