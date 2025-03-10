import { Injectable } from '@angular/core';
import { ConfiguracionRutas } from '../config/configuracion.rutas';
import { HttpClient } from '@angular/common/http';
import { TareaModel } from '../modelos/tarea.model';
import { Observable } from 'rxjs';
import { TareaNuevaModel } from '../modelos/tareaNueva.mode';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {
  urlBase:string= ConfiguracionRutas.urlB;

  constructor(
    private http: HttpClient
  ) { }

  obtenerTareas(): Observable<TareaModel[]> {
    const response =  this.http.get<TareaModel[]>(`${this.urlBase}task`);
    console.log(response);
    return response; 
    
  }

  crearTarea(tarea: TareaNuevaModel): Observable<TareaNuevaModel> {
    return this.http.post<TareaNuevaModel>(`${this.urlBase}task`, tarea);
  }
  
  eliminarTarea(id:number): Observable<any> {
    return this.http.delete(`${this.urlBase}task/${id}`);
  }

  actualizarTarea(id: number, tarea: Partial<TareaModel>): Observable<TareaModel> {
    return this.http.patch<TareaModel>(`${this.urlBase}task/${id}`, tarea);
  }
}
