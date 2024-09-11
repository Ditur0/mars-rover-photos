import { Component, Injectable } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-input-sol',
  standalone: true,
  imports: [],
  templateUrl: './input-sol.component.html',
  styleUrl: './input-sol.component.css',
})
@Injectable({
  providedIn: 'root',
})
export class InputSolComponent {
  private sol!: string;

  constructor(private app: AppComponent) {}

  setSol(val: string) {
    this.sol = val;
  }

  getSol(): string {
    return this.sol;
  }

  click(): void {
    this.app.getPhotos(this.getSol());
  }
}
