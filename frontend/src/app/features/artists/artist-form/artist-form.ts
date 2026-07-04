import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-artist-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './artist-form.html',
  styleUrl: './artist-form.scss',
})
export class ArtistForm {
  private readonly fb = inject(FormBuilder);
  private readonly artistService = inject(ArtistService);
  private readonly router = inject(Router);

  readonly submitting = signal(false);

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    nationality: [''],
    biography: [''],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    this.artistService.create(this.form.getRawValue()).subscribe({
      next: () => this.router.navigate(['/artists']),
      error: () => this.submitting.set(false),
    });
  }
}
