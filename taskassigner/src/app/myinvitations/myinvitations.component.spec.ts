import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyinvitationsComponent } from './myinvitations.component';

describe('MyinvitationsComponent', () => {
  let component: MyinvitationsComponent;
  let fixture: ComponentFixture<MyinvitationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyinvitationsComponent]
    });
    fixture = TestBed.createComponent(MyinvitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
