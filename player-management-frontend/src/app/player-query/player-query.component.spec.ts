import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerQueryComponent } from './player-query.component';

describe('PlayerQueryComponent', () => {
  let component: PlayerQueryComponent;
  let fixture: ComponentFixture<PlayerQueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerQueryComponent]
    });
    fixture = TestBed.createComponent(PlayerQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
