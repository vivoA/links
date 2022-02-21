import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDirctivesComponent } from './home-dirctives.component';

describe('HomeDirctivesComponent', () => {
  let component: HomeDirctivesComponent;
  let fixture: ComponentFixture<HomeDirctivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDirctivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDirctivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
