import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AlbumDetailsComponent } from './components/pages/album-details/album-details.component';
import { AlbumComponent } from './components/pages/album/album.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'albuns',
    component: AlbumComponent,
    title: 'Álbuns',
  },
  {
    path: 'albuns/:albumId',
    component: AlbumDetailsComponent,
  }
];
