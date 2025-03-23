import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAbordagemComponent } from './tela-abordagem.component';

describe('TelaAbordagemComponent', () => {
  let component: TelaAbordagemComponent;
  let fixture: ComponentFixture<TelaAbordagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaAbordagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaAbordagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
