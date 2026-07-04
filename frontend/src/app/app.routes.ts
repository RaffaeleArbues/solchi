import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'artists',
    loadChildren: () => import('./features/artists/artist.routes').then((m) => m.ARTIST_ROUTES),
  },
  { path: '', redirectTo: 'artists', pathMatch: 'full' },
];
