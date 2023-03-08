import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  private photosUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {
   }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl);
  }

  getAlbum(id: number): Observable<Album> {
    const url = `${this.albumsUrl}/${id}`;
    return this.http.get<Album>(url);
  }

  updateAlbum(album: Album): Observable<any> {
    const url = `${this.albumsUrl}/${album.id}`;
    return this.http.put(url, album);
  }

  deleteAlbum(id: number): Observable<any> {
    const url = `${this.albumsUrl}/${id}`;
    return this.http.delete(url);
  }

  getPhotos(albumId: number): Observable<any[]> {
    const url = `${this.photosUrl}?albumId=${albumId}`;
    return this.http.get<any[]>(url);
  }

}
