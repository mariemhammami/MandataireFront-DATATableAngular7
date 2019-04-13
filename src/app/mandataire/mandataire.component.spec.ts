import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandataireComponent } from './mandataire.component';

describe('MandataireComponent', () => {
  let component: MandataireComponent;
  let fixture: ComponentFixture<MandataireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandataireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
