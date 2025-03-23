import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAbordagem1Component } from './tela-abordagem-1.component';

describe('TelaAbordagem1Component', () => {
  let component: TelaAbordagem1Component;
  let fixture: ComponentFixture<TelaAbordagem1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaAbordagem1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaAbordagem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
