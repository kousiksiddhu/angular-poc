import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayAroundComponent } from './play-around.component';

describe('PlayAroundComponent', () => {
  let component: PlayAroundComponent;
  let fixture: ComponentFixture<PlayAroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayAroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayAroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
