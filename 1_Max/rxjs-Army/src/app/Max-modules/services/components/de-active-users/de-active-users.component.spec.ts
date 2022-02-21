import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeActiveUsersComponent } from './de-active-users.component';

describe('DeActiveUsersComponent', () => {
  let component: DeActiveUsersComponent;
  let fixture: ComponentFixture<DeActiveUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeActiveUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeActiveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
