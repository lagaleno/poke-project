import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GinasioComponent } from './ginasio.component';

describe('GinasioComponent', () => {
  let component: GinasioComponent;
  let fixture: ComponentFixture<GinasioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GinasioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GinasioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
