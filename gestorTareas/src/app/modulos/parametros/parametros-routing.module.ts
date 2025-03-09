import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTareasComponent } from './crear-tareas/crear-tareas.component';
import { ListarTareasComponent } from './listar-tareas/listar-tareas.component';
import { EliminarTareasComponent } from './eliminar-tareas/eliminar-tareas.component';

const routes: Routes = [
  {
    path: 'crear-tarea',
    component: CrearTareasComponent
  },
  {
    path: 'listar-tareas',
    component: ListarTareasComponent
  },
  {
    path: 'eliminar-tarea',
    component: EliminarTareasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
