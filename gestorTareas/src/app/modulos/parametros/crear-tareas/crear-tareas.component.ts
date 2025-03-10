import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParametrosService } from '../../../servicios/parametros.service';
import { TareaNuevaModel } from '../../../modelos/tareaNueva.mode';

@Component({
  selector: 'app-crear-tareas',
  standalone: false,
  templateUrl: './crear-tareas.component.html',
  styleUrls: ['./crear-tareas.component.css']
})
export class CrearTareasComponent {
  fGroup: FormGroup=new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private servicioParametros: ParametrosService
  ) { }

  ngOnInit(){
    this.construirFormulario();
  }

  construirFormulario(){
    this.fGroup = this.fb.group({
      titleTask: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(360)]],
    });
  }
  

  crearTarea(): void {
    if (this.fGroup.invalid) {
      return;
    }
    const campos = this.getObtenerFormGroup();
    const tarea = {
      title: campos['titleTask'].value,
      description: campos['description'].value,
      do_mark: false
    };
    console.log(tarea);

    this.servicioParametros.crearTarea(tarea).subscribe({
      next: (response) => {
        console.log('Tarea creada:', response);
        this.router.navigate(['/parametros/listar-tareas']);
      },
      error: (error) => {
        console.error('Error al crear la tarea', error);
      }
    });
  }

  regresar(): void {
    this.router.navigate(['/parametros/listar-tareas']);
  }

  getObtenerFormGroup(){
    return this.fGroup.controls;
  }
}
