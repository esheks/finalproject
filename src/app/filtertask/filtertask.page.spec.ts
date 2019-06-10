import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltertaskPage } from './filtertask.page';

describe('FiltertaskPage', () => {
  let component: FiltertaskPage;
  let fixture: ComponentFixture<FiltertaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltertaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltertaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
