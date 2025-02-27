import { Component, OnInit } from '@angular/core';
import { Album } from '../../../models/album';
import { AlbumService } from '../../../services/album.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css',
})
export class AlbumComponent implements OnInit {
  albums: Album[] = [];

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumService.getAllAlbuns().subscribe({
      next: (data) => this.albums = data,
      error: (error) => console.log(error),
    });
  }
}
