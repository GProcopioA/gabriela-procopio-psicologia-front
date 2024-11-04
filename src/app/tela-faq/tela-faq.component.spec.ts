import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaFaqComponent } from './tela-faq.component';

describe('TelaFaqComponent', () => {
  let component: TelaFaqComponent;
  let fixture: ComponentFixture<TelaFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaFaqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
