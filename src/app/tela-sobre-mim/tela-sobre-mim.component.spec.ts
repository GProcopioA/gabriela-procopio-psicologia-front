import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSobreMimComponent } from './tela-sobre-mim.component';

describe('TelaSobreMimComponent', () => {
  let component: TelaSobreMimComponent;
  let fixture: ComponentFixture<TelaSobreMimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaSobreMimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaSobreMimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
