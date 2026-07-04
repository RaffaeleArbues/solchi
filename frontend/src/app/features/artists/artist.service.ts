import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';

import { environment } from '../../../environments/environment';
import { Artist, ArtistInput } from './artist.model';

@Injectable({ providedIn: 'root' })
export class ArtistService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/artists`;

  readonly artists = signal<Artist[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  loadAll(): void {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<Artist[]>(this.baseUrl).subscribe({
      next: (artists) => {
        this.artists.set(artists);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Impossibile caricare gli artisti.');
        this.loading.set(false);
      }
    });
  }

  create(artist: ArtistInput) {
    return this.http.post<Artist>(this.baseUrl, artist);
  }
}
