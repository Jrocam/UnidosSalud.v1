import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CientificosComponent } from './cientificos.component';

describe('CientificosComponent', () => {
  let component: CientificosComponent;
  let fixture: ComponentFixture<CientificosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CientificosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CientificosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
