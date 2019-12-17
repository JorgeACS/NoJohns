import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesetListPage } from './ruleset-list.page';

describe('RulesetListPage', () => {
  let component: RulesetListPage;
  let fixture: ComponentFixture<RulesetListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesetListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesetListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
