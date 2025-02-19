import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from 'lib'
import { AppButtonComponent } from './app-button/app-button.component';
@Component({
  selector: 'app-root',
  imports: [ButtonComponent, AppButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tailwind-bug-app';
}
