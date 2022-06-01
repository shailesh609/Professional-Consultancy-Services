import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCertificatesComponent } from './show-certificates.component';

describe('ShowCertificatesComponent', () => {
  let component: ShowCertificatesComponent;
  let fixture: ComponentFixture<ShowCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCertificatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
