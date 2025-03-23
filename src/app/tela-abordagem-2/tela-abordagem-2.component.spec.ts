import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAbordagem2Component } from './tela-abordagem-2.component';

describe('TelaAbordagem2Component', () => {
  let component: TelaAbordagem2Component;
  let fixture: ComponentFixture<TelaAbordagem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaAbordagem2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaAbordagem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
