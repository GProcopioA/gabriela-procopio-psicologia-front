import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAbordagem3Component } from './tela-abordagem-3.component';

describe('TelaAbordagem3Component', () => {
  let component: TelaAbordagem3Component;
  let fixture: ComponentFixture<TelaAbordagem3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaAbordagem3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaAbordagem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
