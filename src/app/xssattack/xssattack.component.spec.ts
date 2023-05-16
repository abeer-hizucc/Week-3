import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XSSAttackComponent } from './xssattack.component';

describe('XSSAttackComponent', () => {
  let component: XSSAttackComponent;
  let fixture: ComponentFixture<XSSAttackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XSSAttackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XSSAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
