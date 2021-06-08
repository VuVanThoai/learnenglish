import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordMemoriedComponent } from './word-memoried.component';

describe('WordMemoriedComponent', () => {
  let component: WordMemoriedComponent;
  let fixture: ComponentFixture<WordMemoriedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordMemoriedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordMemoriedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
