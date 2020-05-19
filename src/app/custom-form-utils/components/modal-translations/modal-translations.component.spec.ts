import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTranslationsComponent } from './modal-translations.component';

describe('ModalTranslationsComponent', () => {
  let component: ModalTranslationsComponent;
  let fixture: ComponentFixture<ModalTranslationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTranslationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTranslationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
