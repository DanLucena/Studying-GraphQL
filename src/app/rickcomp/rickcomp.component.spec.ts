import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickcompComponent } from './rickcomp.component';

describe('RickcompComponent', () => {
  let component: RickcompComponent;
  let fixture: ComponentFixture<RickcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RickcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
