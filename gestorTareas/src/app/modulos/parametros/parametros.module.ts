import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { CrearTareasComponent } from './crear-tareas/crear-tareas.component';
import { ListarTareasComponent } from './listar-tareas/listar-tareas.component';
import { EliminarTareasComponent } from './eliminar-tareas/eliminar-tareas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CrearTareasComponent,
    ListarTareasComponent,
    EliminarTareasComponent
  ],
  imports: [
    ParametrosRoutingModule,
    CommonModule,
    ParametrosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class ParametrosModule { }
