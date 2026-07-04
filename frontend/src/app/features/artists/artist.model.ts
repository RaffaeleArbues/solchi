export interface Artist {
  id: number;
  name: string;
  nationality: string | null;
  biography: string | null;
}

export type ArtistInput = Omit<Artist, 'id'>;
