import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Album } from '../album';
import { Photo } from '../photo';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  album: Album = {} as Album;
  photos: Photo[] = [];

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getAlbum(id);
      this.getPhotos(id);
    }
  }

  getAlbum(id: number): void {
    this.albumsService.getAlbum(id)
      .subscribe(album => this.album = album);
  }

  getPhotos(id: number): void {
    this.albumsService.getPhotos(id)
      .subscribe(photos => this.photos = photos);
  }

  goBack(): void {
    this.location.back();
  }
}