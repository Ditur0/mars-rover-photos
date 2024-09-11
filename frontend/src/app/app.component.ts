import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { InputSolComponent } from './input-sol/input-sol.component';
import { Photo } from './photo';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { MarsService } from './services/mars.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    InputSolComponent,
    PhotosListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
@Injectable({
  providedIn: 'root',
})
export class AppComponent implements OnInit {
  public photos: Photo[] = [];
  private sol: string = '1';

  constructor(private marsSerivce: MarsService) {}

  ngOnInit(): void {
    this.getPhotos(this.sol);
  }

  public getPhotos(sol: string): void {
    this.marsSerivce.getPhotos(sol).subscribe(
      (response: Photo[]) => {
        this.photos = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
