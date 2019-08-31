import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationComunitiesComponent } from './application-comunities.component';

describe('ApplicationComunitiesComponent', () => {
  let component: ApplicationComunitiesComponent;
  let fixture: ComponentFixture<ApplicationComunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationComunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationComunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
