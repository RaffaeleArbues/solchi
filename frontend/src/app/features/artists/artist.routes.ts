import { Routes } from '@angular/router';

export const ARTIST_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./artist-list/artist-list').then((m) => m.ArtistList),
  },
  {
    path: 'new',
    loadComponent: () => import('./artist-form/artist-form').then((m) => m.ArtistForm),
  },
];
