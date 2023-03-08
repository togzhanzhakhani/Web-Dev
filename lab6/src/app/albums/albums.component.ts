import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Album } from '../album';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loaded = false

  constructor(private albumService: AlbumsService, private router: Router) { }
  
  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void {
    this.albumService.getAlbums()
      .subscribe(albums => this.albums = albums);
  }

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id)
      .subscribe(() => {
        this.albums = this.albums.filter(album => album.id !== id);
      });
  }
}
