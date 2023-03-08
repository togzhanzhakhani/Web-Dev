import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../album';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album = {} as Album;
  editedTitle: string = '';
  isEditing: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private albumsService: AlbumsService) { }

  ngOnInit(): void {
    const albumId = this.route.snapshot.paramMap.get('id');
    this.albumsService.getAlbum(Number(albumId)).subscribe(
      album => {
        this.album = album;
        this.editedTitle = album.title;
      },
      error => console.error(error)
    );
  }

  saveAlbum(): void {
    this.album.title = this.editedTitle;
    this.albumsService.updateAlbum(this.album).subscribe(
      () => this.goBack(),
      error => console.error(error)
    );
  }

  edit(): void {
    this.isEditing = true;
    this.editedTitle = this.album.title;
  }

  cancelEdit(): void {
    this.isEditing = false;
  }

  deleteAlbum(): void {
    if (confirm("Are you sure you want to delete this album?")) {
    this.albumsService.deleteAlbum(this.album.id).subscribe(
      () => this.router.navigate(['/albums']),
      error => console.error(error)
    );
    }
  }

  goBack(): void {
    this.router.navigate(['/albums', this.album.id]);
  }
}
