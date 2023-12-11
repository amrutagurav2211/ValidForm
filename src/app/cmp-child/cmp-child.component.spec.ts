import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpChildComponent } from './cmp-child.component';

describe('CmpChildComponent', () => {
  let component: CmpChildComponent;
  let fixture: ComponentFixture<CmpChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmpChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
