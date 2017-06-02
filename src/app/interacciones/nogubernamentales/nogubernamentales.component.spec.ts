import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NogubernamentalesComponent } from './nogubernamentales.component';

describe('NogubernamentalesComponent', () => {
  let component: NogubernamentalesComponent;
  let fixture: ComponentFixture<NogubernamentalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NogubernamentalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NogubernamentalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
