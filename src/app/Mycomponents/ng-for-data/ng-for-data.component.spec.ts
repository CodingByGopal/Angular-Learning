import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForDataComponent } from './ng-for-data.component';

describe('NgForDataComponent', () => {
  let component: NgForDataComponent;
  let fixture: ComponentFixture<NgForDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
