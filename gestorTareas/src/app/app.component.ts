import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationStart, Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestorTareas';
  rutaActual: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationStart) {
        this.rutaActual = event.url;
      }
    });
  }
}
