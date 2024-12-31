import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TemporaryComponent } from "./temporary/temporary.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TemporaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vogelbekdier-project';
}
