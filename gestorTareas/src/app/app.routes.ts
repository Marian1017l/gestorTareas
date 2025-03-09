import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'parametros',
        loadChildren: () => import('./modulos/parametros/parametros.module').then(m => m.ParametrosModule)
    }    
];
