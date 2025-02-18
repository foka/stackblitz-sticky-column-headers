import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'main.html',
  styleUrl: 'main.scss',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
