import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photos-list',
  standalone: true,
  imports: [],
  templateUrl: './photos-list.component.html',
  styleUrl: './photos-list.component.css',
})
export class PhotosListComponent {
  [x: string]: any;

  @Input() photos: { img_src: string }[] = [];
}
