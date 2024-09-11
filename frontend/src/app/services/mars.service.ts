import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Photo } from '../photo';

@Injectable({
  providedIn: 'root',
})
export class MarsService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getPhotos(sol: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.apiServerUrl}/sol/${sol}`);
  }
}
