import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreategroupComponent } from './creategroup.component';

describe('CreategroupComponent', () => {
  let component: CreategroupComponent;
  let fixture: ComponentFixture<CreategroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreategroupComponent]
    });
    fixture = TestBed.createComponent(CreategroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
