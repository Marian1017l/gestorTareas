import { Component } from '@angular/core';
import { TareaModel } from '../../../modelos/tarea.model';
import { ParametrosService } from '../../../servicios/parametros.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-listar-tareas',
  standalone: false,
  templateUrl: './listar-tareas.component.html',
  styleUrls: ['./listar-tareas.component.css']
})
export class ListarTareasComponent {
  tareas:TareaModel[]=[];
  tareasMarcadas: TareaModel[] = [];
  tareasNoMarcadas: TareaModel[] = [];

  constructor(
    private parametrosService: ParametrosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.obtenerListaTareas();
  }

  obtenerListaTareas() {
    this.parametrosService.obtenerTareas().subscribe({
      next: (tareas: TareaModel[]) => {
        this.tareas = tareas;
        this.separarTareas();
        console.log('Tareas obtenidas:', this.tareas);
        console.log('Tareas marcadas:', this.tareasMarcadas);
        console.log('Tareas no marcadas:', this.tareasNoMarcadas);
        
      },
      error: (error) => {
        console.error('Error al obtener las tareas', error);
      }
    });
  }

  separarTareas(): void {
    this.tareasMarcadas = this.tareas.filter(tarea => tarea.do_mark);
    this.tareasNoMarcadas = this.tareas.filter(tarea => !tarea.do_mark);
  }

  marcarComoHecha(tarea: TareaModel): void {
    if (tarea.id !== undefined) {
      this.parametrosService.actualizarTarea(tarea.id, { do_mark: true }).subscribe({
        next: (tareaActualizada: TareaModel) => {
          console.log('Tarea actualizada:', tareaActualizada);
          this.obtenerListaTareas();
        },
        error: (error) => {
          console.error('Error al actualizar la tarea', error);
        }
      });
    } else {
      console.error('Error: La tarea no tiene un ID válido');
    }
  }

  redirigirACrearTarea(){
    this.router.navigate(['parametros/crear-tarea']);
  }
}
