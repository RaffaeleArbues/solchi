import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-artist-list',
  imports: [RouterLink],
  templateUrl: './artist-list.html',
  styleUrl: './artist-list.scss',
})
export class ArtistList implements OnInit {
  private readonly artistService = inject(ArtistService);

  readonly artists = this.artistService.artists;
  readonly loading = this.artistService.loading;
  readonly error = this.artistService.error;

  ngOnInit(): void {
    this.artistService.loadAll();
  }
}
