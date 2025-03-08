import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTareasComponent } from './eliminar-tareas.component';

describe('EliminarTareasComponent', () => {
  let component: EliminarTareasComponent;
  let fixture: ComponentFixture<EliminarTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarTareasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
