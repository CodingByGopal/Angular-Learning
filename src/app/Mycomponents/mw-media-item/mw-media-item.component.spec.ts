import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MwMediaItemComponent } from './mw-media-item.component';

describe('MwMediaItemComponent', () => {
  let component: MwMediaItemComponent;
  let fixture: ComponentFixture<MwMediaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MwMediaItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MwMediaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
