import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarMedicoComponent } from './deletar-medico.component';

describe('DeletarMedicoComponent', () => {
  let component: DeletarMedicoComponent;
  let fixture: ComponentFixture<DeletarMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
