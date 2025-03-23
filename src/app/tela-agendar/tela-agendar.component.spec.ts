import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAgendarComponent } from './tela-agendar.component';

describe('TelaAgendarComponent', () => {
  let component: TelaAgendarComponent;
  let fixture: ComponentFixture<TelaAgendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaAgendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaAgendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
